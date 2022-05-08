import Sugestao from "./Sugestao";
import User from "./User";

const sugestao = [{
    img: "assets/img/bad.vibes.memes.svg",
    user: "bad.vibes.memes",
    text: "Segue você"
},
{
    img: "assets/img/chibirdart.svg",
    user: "chibirdart",
    text: "Segue você"
},
{
    img: "assets/img/razoesparaacreditar.svg",
    user: "razoesparaacreditar",
    text: "Novo no Instagram"
},
{
    img: "assets/img/adorable_animals.svg",
    user: "adorable_animals",
    text: "Segue você"
},
{
    img: "assets/img/smallcutecats.svg",
    user: "smallcutecats",
    text: "Segue você"
}];

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User
            img="assets/img/catanacomics.svg"
            user="catanacomics"
            name="Catana"
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {
                    sugestao.map(sugestao =>
                        <Sugestao
                            img={sugestao.img}
                            user={sugestao.user}
                            text={sugestao.text}
                        />)
                }

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}