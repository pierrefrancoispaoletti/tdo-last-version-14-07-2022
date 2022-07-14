import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Modal,
} from "semantic-ui-react";

const PopupValentinesDay = ({ openPopup, setOpenPopup }) => {
  return (
    <Modal open={openPopup} onClose={() => setOpenPopup(false)} closeIcon>
      <Modal.Header
        style={{
          background: "#F3DDD0",
          fontFamily: "Aesthete",
          fontSize: "2em",
        }}
      >
        The LoVe Sélection
      </Modal.Header>
      <Modal.Content
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/28/79/8f/28798ff1810b9a206913d02996af00b6.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container
          style={{
            background: "rgba(255,255,255,0.3)",
            boxShadow: "-1px 0px 37px 18px rgba(255,255,255,0.3)",
          }}
        >
          <Grid divided="vertically">
            <Grid.Row columns={1} textAlign="center">
              <Grid.Column>
                <Header
                  textAlign="center"
                  style={{ fontFamily: "Aesthete", fontSize: "3em" }}
                >
                  Full LoVe Menu
                  <Header.Subheader
                    style={{
                      fontFamily: "Poppins-ExtraBold",
                      textTransform: "uppercase",
                    }}
                  >
                    80€ / personne
                  </Header.Subheader>
                </Header>
                <List>
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      Cocktail LoVe MoOd
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Champagne, fruits rouges
                    </List.Description>
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      Pizzetta Soufflée
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Jeunes pousses, burrata, truffe, parmesan affiné
                    </List.Description>
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      L'oeuf Mollet Pané
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Sauce truffe, croûtons et condiments, Guanciale
                    </List.Description>
                  </List.Item>
                  <Divider
                    style={{
                      borderTop: "1px solid pink",
                      borderBottom: "1px solid pink",
                    }}
                  />
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      Love Côte de Boeuf à partager (1,500 Kg)
                      <Header.Subheader
                        style={{
                          fontFamily: "Poppins-ExtraBold",
                          textTransform: "uppercase",
                        }}
                      >
                        + 40 € / personne
                      </Header.Subheader>
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Servie avec purée à la truffe, sauce truffe et truffe
                      fraîche
                    </List.Description>
                  </List.Item>
                  <Divider horizontal> OÙ </Divider>
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      Linguini Truffe Blanche
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Duxelle de Champignons, crème de Parmesan affiné,
                      ciboulette
                    </List.Description>
                  </List.Item>
                  <Divider
                    style={{
                      borderTop: "1px solid pink",
                      borderBottom: "1px solid pink",
                    }}
                  />
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      La Pomme Rôtie avec Amour
                    </List.Header>
                    <List.Description
                      style={{ fontFamily: "Poppins-Light", fontWeight: "700" }}
                    >
                      Caramélisée au beurre salé et biscuit sablé
                    </List.Description>
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <List.Header
                      style={{
                        fontFamily: "Poppins-ExtraBold",
                        textTransform: "uppercase",
                      }}
                    >
                      Café et truffe chocolat
                    </List.Header>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default PopupValentinesDay;
