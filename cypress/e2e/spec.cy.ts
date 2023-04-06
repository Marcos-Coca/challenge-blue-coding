describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input").type("cat");

    cy.get("button").first().click();
    cy.get(".active img").should(
      "have.attr",
      "src",
      "https://media0.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=2749b2db598yh84rhi7w3x2z7zt9lhec53cjpoqzn180dlbh&amp;rid=giphy.gif&amp;ct=g"
    );
  });
});
