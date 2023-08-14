import { HeartAdd, SearchNormal1 } from "iconsax-react";
import { BagTick2 } from "iconsax-react";
import { SpanNavInput } from "./styled";

export const NavigateUserDash = () => {
    return (
        <div>
            <nav>
                <span>
                    <BagTick2 size="32" color="#040404" variant="TwoTone" />
                    <HeartAdd
                        size="32"
                        color="#040404"
                        variant="Outline"
                        className="heartIcon"
                    />
                    <SpanNavInput>
                        <SearchNormal1
                            size="32"
                            color="#555555"
                            variant="Broken"
                            className="search-icon"
                        />
                        <input
                            type="search"
                            className="search-input"
                            placeholder="Faça sua busca"
                        />
                    </SpanNavInput>
                </span>
            </nav>
        </div>
    );
};
