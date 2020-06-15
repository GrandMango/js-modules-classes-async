import { url, region } from "../practice1";

test("url and region to expect result", () => {

  expect(url).toBe("https://console.amazonaws.cn:4455/api");
  expect(region).toBe("cn-north-1");
});
