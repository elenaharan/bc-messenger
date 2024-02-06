import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "intersection-observer";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import * as helpers from "../helpers";
import ChatInput from "../Components/ChatRoom/ChatInput";

jest.mock("pubnub");

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

let mockInstantiatePubnub;
let pubnubInstance: any;

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

pubnubInstance = helpers.instantiatePubnub(PubNub);

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
