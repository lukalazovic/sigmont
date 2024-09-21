import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/schemas";
import { structureTool } from "sanity/structure";
import {
    MdConstruction,
    MdCreate,
    MdDescription,
    MdGroup,
    MdHome,
    MdSettings,
} from "react-icons/md";

export default defineConfig({
    name: "default",
    title: "Studio",

    projectId: "cb6i28mk",
    dataset: "production",

    basePath: "/studio",

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        S.listItem()
                            .title("Settings")
                            .icon(MdSettings)
                            .child(
                                S.editor()
                                    .title("Settings")
                                    .schemaType("siteSettings")
                                    .documentId("siteSettings")
                            ),
                        S.listItem()
                            .title("Homepage")
                            .icon(MdHome)
                            .child(
                                S.document()
                                    .schemaType("landing")
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
                            .title("About us")
                            .icon(MdGroup)
                            .child(
                                S.document()
                                    .schemaType("landing")
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
                            .title("Services")
                            .icon(MdConstruction)
                            .child(
                                S.documentTypeList("service").title(
                                    "Service Pages"
                                )
                            ),
                        S.listItem()
                            .title("Landing")
                            .icon(MdDescription)
                            .child(
                                S.documentTypeList("landing").title(
                                    "Landing Page"
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
