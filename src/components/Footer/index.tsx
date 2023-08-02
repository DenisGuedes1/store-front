import { Instagram } from "iconsax-react";
import { Footer } from "./style";
export const FooterPage = () => {
    return (
        <>
            <Footer>
                <a href="instagram.com">
                    <Instagram className="icone" />
                </a>
                {/* </Instagram> */}
                <h3>Contatos:(55-00000-0000)</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi exercitationem quos eos vel omnis suscipit voluptatem
                    harum nam a blanditiis commodi eligendi voluptates cumque
                    nostrum vero delectus, accusamus libero distinctio?
                </p>
            </Footer>
        </>
    );
};
