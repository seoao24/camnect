declare module "@editorjs/embed" {
    import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
  
    interface EmbedConfig {
      services?: Record<string, unknown>;
    }
  
    class Embed implements ToolConstructable {
      constructor(config?: ToolSettings & EmbedConfig);
      static get toolbox(): { title: string; icon: string };
    }
  
    export default Embed;
  }