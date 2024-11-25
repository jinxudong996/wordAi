import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import WorkNav from '@/components/WorkNav'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Search,
  Star,
  Plus,
  User,
  Settings,
  DollarSign,
  LogOut,
  Trash2,
} from 'lucide-react'

export default function Layout({
  params,
  children,
  directory, // parallel route
}: Readonly<{
  params: { id: string }
  children: React.ReactNode
  directory: React.ReactNode
}>) {
  const { id = '0' } = params

  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen">
      <ResizablePanel defaultSize={20}>
        <div className="flex flex-col h-screen bg-muted text-muted-foreground p-2">
          <div>
            <Button className="w-full justify-start px-2" variant="ghost">
              <Search className="h-4 w-4" />
              &nbsp;&nbsp;搜索
            </Button>
            <Button className="w-full justify-start px-2" variant="ghost">
              <Star className="h-4 w-4" />
              &nbsp;&nbsp;收藏夹
            </Button>
            <Button
              className="w-full justify-start px-2 font-bold hover:bg-card"
              variant="ghost"
            >
              <Plus className="h-4 w-4" />
              &nbsp;&nbsp;创建文档
            </Button>
          </div>
          <Separator className="my-4" />
          <ScrollArea className="flex-auto">{directory}</ScrollArea>
          <Separator className="my-4" />
          <div>
            <Button className="w-full justify-start px-2" variant="ghost">
              <Trash2 className="h-4 w-4" />
              &nbsp;&nbsp;回收站
            </Button>
            <Button className="w-full justify-start px-2 " variant="ghost">
              <User className="h-4 w-4" />
              &nbsp;&nbsp;我的账户
            </Button>
            <Button className="w-full justify-start px-2 " variant="ghost">
              <DollarSign className="h-4 w-4" />
              &nbsp;&nbsp;升级 VIP
            </Button>
            <Button className="w-full justify-start px-2 " variant="ghost">
              <Settings className="h-4 w-4" />
              &nbsp;&nbsp;设置
            </Button>
            <Button className="w-full justify-start px-2 " variant="ghost">
              <LogOut className="h-4 w-4" />
              &nbsp;&nbsp;退出登录
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="h-screen flex flex-col relative">
          {/* nav bar */}
          <WorkNav workId={id} />
          {/* content */}
          <div className="flex-1">{children}</div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}