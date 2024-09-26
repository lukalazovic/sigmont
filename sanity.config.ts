import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/schemas";
import { structureTool } from "sanity/structure";
import {
    MdHome,
    MdInfo,
    MdCreate,
    MdSettings,
    MdNewspaper,
    MdContactPage,
    MdConstruction,
} from "react-icons/md";
import "./app/globals.css"

export default defineConfig({
    name: "default",
    title: "Sigmontt Studio",

    projectId: "cb6i28mk",
    dataset: "production",

    basePath: "/studio",

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Glavni Meni")
                    .items([
                        S.listItem()
                            .title("Globalna Podešavanja")
                            .icon(MdSettings)
                            .child(
                                S.editor()
                                    .title("Globalna Podešavanja")
                                    .schemaType("siteSettings")
                                    .documentId("siteSettings")
                            ),
                        S.listItem()
                            .title("Početna")
                            .icon(MdHome)
                            .child(
                                S.document()
                                    .schemaType("home")
                                    .documentId("homepage")
                                    .views([
                                        S.view
                                            .form()
                                            .title("Editor")
                                            .icon(MdCreate),
                                        // Update this once web preview is enabled
                                        // S.view
                                        //     .component(Iframe)
                                        //     .options({
                                        //         url: (doc) =>
                                        //             resolvePreviewUrl(doc),
                                        //     })
                                        //     .title('Web Preview')
                                        //     .icon(IoMdEye),
                                    ])
                            ),
                        S.listItem()
                            .title("Usluge")
                            .icon(MdConstruction)
                            .child(
                                S.documentTypeList("service").title(
                                    "Lista usluga"
                                )
                            ),
                        S.listItem()
                            .title("O nama")
                            .icon(MdInfo)
                            .child(
                                S.document()
                                    .schemaType("aboutus")
                                    .documentId("aboutus")
                                    .views([
                                        S.view
                                            .form()
                                            .title("Editor")
                                            .icon(MdCreate),
                                        // Update this once web preview is enabled
                                        // S.view
                                        //     .component(Iframe)
                                        //     .options({
                                        //         url: (doc) =>
                                        //             resolvePreviewUrl(doc),
                                        //     })
                                        //     .title('Web Preview')
                                        //     .icon(IoMdEye),
                                    ])
                            ),
                        S.listItem()
                            .title("Kontakt")
                            .icon(MdContactPage)
                            .child(
                                S.document()
                                    .schemaType("contact")
                                    .documentId("contact")
                                    .views([
                                        S.view
                                            .form()
                                            .title("Editor")
                                            .icon(MdCreate),
                                        // Update this once web preview is enabled
                                        // S.view
                                        //     .component(Iframe)
                                        //     .options({
                                        //         url: (doc) =>
                                        //             resolvePreviewUrl(doc),
                                        //     })
                                        //     .title('Web Preview')
                                        //     .icon(IoMdEye),
                                    ])
                            ),
                        S.listItem()
                            .title("Obična stranica")
                            .icon(MdNewspaper)
                            .child(
                                S.documentTypeList("landing").title(
                                    "Obična stranica"
                                )
                            ),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});
