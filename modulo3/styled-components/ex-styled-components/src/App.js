import {Header, Container, Footer, Center, Title, Img, ContainerFloat, Form} from './styles';
import GlobalStyle from './styles';
import img from "./img/lbn.png";

function App() {
  return (
    <div>
      <Header>
        <Img src={img}></Img>
        <Title>WhatsLab</Title>
      </Header>
      
      <Container>
        <ContainerFloat>
          <Center>
            <Form>
              <div className='text'>
                Remetente:
                <input type="text" name="name" />
                Msg:
               <input type="text" name="name" />
                <input type="submit" value="Enviar Mensagem" />
              </div>
            
            </Form>
          </Center>
        </ContainerFloat>
        
      </Container>
        
        <Footer>Copyright&copy; 2022 Juliano Manzano All rights reserved. R. Coximba Itú, 263, Floripa, Cuiabá-MT. CEP 78555-030 </Footer>
      <GlobalStyle/>
    </div>
  );
}

export default App;
