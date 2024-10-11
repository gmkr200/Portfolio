import React,{createContext,useState} from "react";
import { themeData } from "../Data/themeData";
export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const [theme, setTheme] = useState(themeData.theme)

const value = {theme,setTheme}
return (
    <ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>
)
}
export default ThemeContextProvider
