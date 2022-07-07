import {Header, Container, Footer, Center, Title, Img, ContainerFloat, Form, Menssage} from './styles';
import GlobalStyle from './styles';
import img from "./img/lbn.png";
import Formu from "./components/Formu"

 /*<Send/>*/
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
              <form>
               
                <div className='message'>
                  <Menssage>
                 Remetente:
                 <input type="text" name="username" placeholder='Digite seu usuário'/>
                 Msg:
                 
                 <input type="text" name="message" placeholder='Digite sua mensagem' />
                 <div>
                 <Formu/>
                 </div>
                 </Menssage>
                </div>
              </form>
              
            
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
