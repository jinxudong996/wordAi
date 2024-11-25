import { ScrollArea } from '@/components/ui/scroll-area'
import AIIsland from '@/components/AIIsland'

export default function OneWork({ params }: { params: { id: string } }) {
  return (
    <>
      <ScrollArea className="h-[calc(100vh-46px)]">
        <div className="max-w-[900px] mx-auto my-7 h-[2000px]">
          <h1 className="scroll-m-20 font-bold tracking-tight lg:text-5xl">
            动物农场 {params.id}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            庄园农场的琼斯先生锁好几间鸡棚准备过夜，只是这一天他喝得烂醉，竟忘记关上那几扇小门了。他东倒西歪地走过院子，手中一盏提灯的光圈也随着摇摇晃晃。走进后门，他把靴子甩掉，又从放在洗碗间的酒桶里给自己倒了这一天的最后一杯啤酒，就爬上床去。这时琼斯太太早已在那儿打呼噜了。
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            琼斯先生寝室里的灯光一灭，农场里个个厩棚就响起一阵骚动和嘈杂的声响。白天的时候，消息早已传开，老少校——就是那头得过奖的灰白色大公猪——头天晚上做了一个怪梦，打算把它说给农场里所有的动物听。大家已经合计好，只等琼斯先生走开，不会再被他撞见之后，他们就在大谷仓聚齐。老少校——大家都这么叫他，虽然当年他参加展赛时用的名字是“威灵顿之花”——在农场里声望极高，所以每个动物都甘愿牺牲一小时睡眠，听听他到底要说些什么。
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            大谷仓的一头有一个凸起一些的台子，少校这时已经安坐在铺着稻草的床上，头顶上悬着一盏吊在房梁上的油灯。少校这时已经年满十二岁，近年来，身躯颇有些发胖，但看去仍然仪表堂堂。另外，他的犬齿一直没有长出来，这倒让他的相貌显得既聪明又慈祥。没过多久，别的动物先后都来了，并按照各自的习惯安顿下来。首
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            先来的第一章是三条狗——蓝铃花、杰西和品彻尔。接着是一群猪；他们立刻都伏卧在台前的稻草上。一些母鸡栖在窗台上。鸽子落到椽子上扑棱着翅膀。绵羊和奶牛在猪后面，开始倒嚼。两匹辕马，拳击手和苜蓿，并肩走进来。他俩走得很慢，毛烘烘的大蹄子小心翼翼地落下来，生怕踩伤被稻草遮盖住的什么小动物。苜蓿是一匹粗壮的中年母马，在生过第四胎马驹之后，就没能再恢复原来美丽的体型。拳击手生得高大健壮，个头将近六英尺，劲头比得过两匹马加在一起。他的鼻梁儿上有一个白道，给他平添出
          </p>
          {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
    一些傻相。实际上，他的智力确实也不怎么高，但他坚毅的性格和干活时强大的体力却赢得了所有动物的崇敬。在两匹驾车的辕马之后，进来的是白山羊穆瑞尔和毛驴本杰明。本杰明在农场里年纪最老，脾气也最坏。他不太爱说话，但只要一张嘴，说出来的准是刻薄挖苦的言词。举例说吧，他说上帝给了他尾巴是为了叫他轰苍蝇，但是他宁可不要这个尾巴也别有苍蝇。在农场的动物中间，只有他从来不笑。问他为什么，他说他看不见什么值得笑的事。不过，尽管他从来没有公开承认过，他对拳击手却是心悦诚服的。他们俩
  </p> */}
        </div>
      </ScrollArea>
      <AIIsland />
    </>
  )
}