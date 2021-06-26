import styled from 'styled-components'

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #f3a42e, #b13935 );
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }

        .logo {
            flex: 1;
            font: 1.5rem "poppins", sans-serif;
            display: flex;
            align-items: center;
            
        }
        nav {
            ul{
            
                display: flex;
            }

                li{
                    list-style: none;
                    margin-left: 20px;
                   

                    a{
                        text-decoration:none;
                        color: #fff;
                        display: flex;
                        align-items: center;

                        &:hover {
                            color: #000;
                            background-color: #d3bcbc;
                        }
                    }
                }
        }

`;