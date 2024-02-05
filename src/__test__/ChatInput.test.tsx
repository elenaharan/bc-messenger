import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "intersection-observer";
import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import * as helpers from "../helpers.js";
import ChatInput from "../Components/ChatRoom/ChatInput.js";

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

test("renders default message in input field", () => {
  render(
    <PubNubProvider client={pubnubInstance}>
      <ChatInput />;
    </PubNubProvider>
  );

  act(() => {
    expect(screen.getByPlaceholderText("Send message")).toBeVisible();
  });
});

test("accepts and renders a message", async () => {
  render(
    <PubNubProvider client={pubnubInstance}>
      <ChatInput />;
    </PubNubProvider>
  );

  await userEvent.type(
    screen.getByPlaceholderText("Send message"),
    "Changed Value"
  );

  expect(screen.getByDisplayValue("Changed Value")).toBeVisible();
});
