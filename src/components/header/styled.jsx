import styled from 'styled-components'

export const AreaHeader = styled.div`
height: 60px;
background-color: #0f0fbb;
color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }

        .logo {
            flex: 1;
            font: 1.5rem "poppins", sans-serif;
        
            
        }
        nav {
            ul{
                align-items: center;
                display: flex;
            }

                li{
                    list-style: none;
                    margin-left: 20px;
                }
        }

`;