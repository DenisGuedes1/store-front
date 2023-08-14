import styled from "styled-components";

export const SpanNavInput = styled.span`
    position: relative;
    & .search-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        color: gray;
        pointer-events: none;
    }
    &.search-input {
        padding-left: 30px;
    }
`;
