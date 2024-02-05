import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "intersection-observer";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import * as helpers from "../helpers.js";
import ChatMessages from "../Components/ChatRoom/ChatMessages.js";
import ChatInput from "../Components/ChatRoom/ChatInput.js";

global.matchMedia =
  global.matchMedia ||
  function () {
    const mediaQueryList = {
      matches: false,
      media: "",
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
    return mediaQueryList;
  };

jest.mock("pubnub");

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

let mockInstantiatePubnub;
let pubnubInstance;

mockInstantiatePubnub = jest.fn(
  () =>
    new PubNub({
      publishKey: "12345",
      subscribeKey: "67890",
      userId: "userId",
    })
);
jest
  .spyOn(helpers, "instantiatePubnub")
  .mockImplementation(mockInstantiatePubnub);

pubnubInstance = helpers.instantiatePubnub();

test("it renders new messages onto the screen", async () => {
  render(
    <PubNubProvider client={pubnubInstance}>
      <ChatMessages />
      <ChatInput draftMessage="New Message" />
    </PubNubProvider>
  );

  const inputField = screen.getByTestId("message-input");

  await act(async () => {
    await userEvent.type(inputField, "New Message");
    await userEvent.type(inputField, "{enter}");
    await screen.findByText("New Message", {}, { timeout: 3000 });

    expect(await screen.findByText("New Message")).toBeVisible();
  });
});
