const authController = require("../../controllers/auth.controller");

test("should return 400 if email missing", () => {
  const req = { body: { password: "123" } };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
});
