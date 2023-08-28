class LoginRequests {
  loginRequest(typeUser) {
    cy.fixture("credentials").as("credentials");
    cy.fixture("credentials.json").then((data) => {
      const user = { email: "", password: "" };
      switch (typeUser) {
        case "valid":
          user.email = data.valid_email;
          user.password = data.valid_email;
          break;
        case "invalid":
          user.email = data.invalid_email;
          user.password = data.invalid_password;
          break;
        default:
      }
      cy.request({
        method: "POST",
        url: "https://api.realworld.io/api/users/login",
        failOnStatusCode: false,
        body: { user },
      }).then((response) => {
        cy.wrap(response.body).as("loginResponse");
        cy.wrap(response.status).as("loginStatus");
      });
    });
  }

  createArticle() {
    let auth = "";
    cy.get("@loginResponse").then((data) => {
      auth = "Bearer " + data.user.token;
    });
    cy.fixture("article").as("article");
    cy.fixture("article.json").then((data) => {
      cy.request({
        method: "POST",
        url: "https://api.realworld.io/api/articles/",
        body: {
          article: {
            body: data.articleBody,
            description: data.description,
            tagList: [data.tags],
            title: data.title,
          },
        },
        headers: { authorization: auth },
      }).then((response) => {
        cy.wrap(response.body).as("articleResponse");
      });
    });
  }

  getArticles() {
    let auth = "";
    cy.get("@loginResponse").then((data) => {
      auth = "Bearer " + data.user.token;
    });
    cy.fixture("article").as("article");
    cy.fixture("article.json").then((data) => {
      cy.request({
        method: "GET",
        url: "https://api.realworld.io/api/articles/",
        headers: { authorization: auth },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
        cy.wrap(response.body).as("articlesResponses");
      });
    });
  }

  validateArticleCreation(exist) {
    this.getArticles();
    cy.get("@articlesResponses")
      .its("articles")
      .then((firstJsonArray) => {
        cy.get("@articleResponse")
          .its("article")
          .then((secondJson) => {
            const secondSlug = secondJson.slug;
            const matchingObject = firstJsonArray.find(
              (obj) => obj.slug === secondSlug
            );
            if (exist) {
              expect(matchingObject).to.exist;
            } else {
              expect(matchingObject).to.not.exist;
            }
          });
      });
  }

  deleteArticle() {
    let auth = "";
    cy.get("@loginResponse").then((data) => {
      auth = "Bearer " + data.user.token;
    });
    cy.fixture("article").as("article");
    cy.fixture("article.json").then((data) => {
      const modifiedString = data.title.replace(/\s+/g, "-");
      cy.request({
        method: "DELETE",
        url:
          "https://api.realworld.io/api/articles/" +
          modifiedString +
          "-" +
          data.user_id,
        headers: { authorization: auth },
      }).then((response) => {
        expect(response.status).to.be.eq(204);
        this.validateArticleCreation();
      });
    });
  }
}

export default LoginRequests;
