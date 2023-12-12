import{a as s}from"./GSUL2MEM.js";import{a as l}from"./NVIOUQ7F.js";import{g as p}from"./SKM5Z6ZR.js";var a=class extends l{get inputKeys(){return this.prompt.inputVariables}get outputKeys(){return[this.outputKey]}constructor(t){if(super(t),Object.defineProperty(this,"prompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"llm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"text"}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.prompt=t.prompt,this.llm=t.llm,this.outputKey=t.outputKey??this.outputKey,this.outputParser=t.outputParser??this.outputParser,this.prompt.outputParser){if(this.outputParser)throw new Error("Cannot set both outputParser and prompt.outputParser");this.outputParser=this.prompt.outputParser}}async _getFinalOutput(t,e,r){let o=t[0].text,u;return this.outputParser?u=await this.outputParser.parseWithPrompt(o,e,r?.getChild()):u=o,u}call(t,e){return super.call(t,e)}async _call(t,e){let r={...t},o={};for(let i of this.llm.callKeys)i in t&&(o[i]=t[i],delete r[i]);let u=await this.prompt.formatPromptValue(r),{generations:n}=await this.llm.generatePrompt([u],o,e?.getChild());return{[this.outputKey]:await this._getFinalOutput(n[0],u,e)}}async predict(t,e){return(await this.call(t,e))[this.outputKey]}_chainType(){return"llm_chain"}static async deserialize(t){let{llm:e,prompt:r}=t;if(!e)throw new Error("LLMChain must have llm");if(!r)throw new Error("LLMChain must have prompt");return new a({llm:await p.deserialize(e),prompt:await s.deserialize(r)})}serialize(){return{_type:this._chainType(),llm:this.llm.serialize(),prompt:this.prompt.serialize()}}};export{a};
