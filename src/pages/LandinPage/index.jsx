
import { BannerSection } from "../../components/sections/BannerSection"
import { CategoriesSection } from "../../components/sections/CategoriesSection"
import { ProductsSection } from "../../components/sections/ProductsSection"
import { FormSection } from "../../components/sections/FormSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"



export const LandinPage = () => {
    return(
        <>
        <DefaultTemplate>
            
            <BannerSection/>
            <CategoriesSection/>
            <ProductsSection/>
            <FormSection/>

        </DefaultTemplate>
        
         </>
    )
}