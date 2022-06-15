const { CYCLIC_KEY } = require("@storybook/addon-actions");

describe("Appoitnments", () => {
  it("should book an interview", () => {
    cy.visit("/");
    cy.contains("Monday");
  });
});
