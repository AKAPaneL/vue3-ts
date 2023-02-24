export type ChannelItem  = {   //定义每条数据的类型
    id:number
    name:string
  }
  
export type ChannelResData  = {      //定义返回的数据的结构类型
  data:{
    channels:ChannelItem[]
  }
  message:string
}

export interface Cover {
	type: number;
	images: string[];
}

export interface Result {
	art_id: string;
	title: string;
	aut_id: string;
	comm_count: number;
	pubdate: string;
	aut_name: string;
	is_top: number;
	cover: Cover;
}

export interface Data {
	results: Result[];
	pre_timestamp: string;
}

export interface RootObject {
	data: Data;
	message: string;
}