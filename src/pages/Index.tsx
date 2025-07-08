import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Алексей К.",
      username: "@alexk",
      content: "Крутой концерт вчера! 🎵 Неоновые огни были просто космос ✨",
      likes: 42,
      comments: 8,
      time: "2ч",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      author: "Мария С.",
      username: "@maria_s",
      content: "Новый трек в работе 🎧 Скоро выложу демо! #музыка #творчество",
      likes: 67,
      comments: 15,
      time: "4ч",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      author: "Дмитрий В.",
      username: "@dmitry_v",
      content: "Кто идет на фестиваль в выходные? Собираю компанию! 🎪",
      likes: 23,
      comments: 12,
      time: "6ч",
      avatar: "/placeholder.svg",
    },
  ]);

  const [friends] = useState([
    { name: "Анна", username: "@anna_k", online: true },
    { name: "Павел", username: "@pavel_m", online: false },
    { name: "Елена", username: "@elena_s", online: true },
    { name: "Игорь", username: "@igor_p", online: false },
  ]);

  const [groups] = useState([
    { name: "Музыка 2024", members: 1234, category: "Музыка" },
    { name: "Творческая молодежь", members: 567, category: "Искусство" },
    { name: "Фестивали и концерты", members: 890, category: "События" },
  ]);

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent animate-neon-glow">
                NeoNet
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Input
                  placeholder="Поиск..."
                  className="w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:from-pink-600 hover:to-cyan-500"
                >
                  <Icon name="Search" size={16} />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Icon name="Bell" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Icon name="Mail" size={20} />
              </Button>
              <Avatar className="ring-2 ring-pink-500/50">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white">
                  ME
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Navigation */}
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-white hover:bg-pink-500/20 hover:text-pink-300"
                  >
                    <Icon name="Home" size={20} className="mr-3" />
                    Главная
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-gray-300 hover:bg-gray-700"
                  >
                    <Icon name="User" size={20} className="mr-3" />
                    Профиль
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-gray-300 hover:bg-gray-700"
                  >
                    <Icon name="Users" size={20} className="mr-3" />
                    Друзья
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-gray-300 hover:bg-gray-700"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-3" />
                    Сообщения
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-gray-300 hover:bg-gray-700"
                  >
                    <Icon name="Users2" size={20} className="mr-3" />
                    Группы
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-gray-300 hover:bg-gray-700"
                  >
                    <Icon name="Settings" size={20} className="mr-3" />
                    Настройки
                  </Button>
                </nav>
              </CardContent>
            </Card>

            {/* Online Friends */}
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Icon
                    name="Users"
                    size={20}
                    className="mr-2 text-green-400"
                  />
                  Друзья онлайн
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {friends
                  .filter((friend) => friend.online)
                  .map((friend, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-xs">
                            {friend.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">
                          {friend.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {friend.username}
                        </p>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="ring-2 ring-pink-500/30 animate-neon-pulse">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white">
                      ME
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      placeholder="Что нового?"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500/20 mb-3 transition-all duration-300"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <Icon name="Image" size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <Icon name="Video" size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <Icon name="Smile" size={16} />
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:from-pink-600 hover:to-cyan-500 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
                      >
                        Опубликовать
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gray-800/60 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-gray-700/20"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white">
                          {post.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-white">
                            {post.author}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {post.username}
                          </span>
                          <span className="text-gray-500 text-sm">·</span>
                          <span className="text-gray-500 text-sm">
                            {post.time}
                          </span>
                        </div>
                        <p className="text-gray-200 mb-3">{post.content}</p>
                        <div className="flex items-center space-x-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-pink-400 hover:bg-pink-500/10"
                            onClick={() => handleLike(post.id)}
                          >
                            <Icon name="Heart" size={16} className="mr-1" />
                            {post.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                          >
                            <Icon
                              name="MessageCircle"
                              size={16}
                              className="mr-1"
                            />
                            {post.comments}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white hover:bg-gray-700"
                          >
                            <Icon name="Share" size={16} className="mr-1" />
                            Поделиться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    className="mr-2 text-pink-400"
                  />
                  Популярное
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-pink-500/20 text-pink-300 border-pink-500/30"
                    >
                      #музыка
                    </Badge>
                    <span className="text-sm text-gray-400">1.2k постов</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      #фестиваль
                    </Badge>
                    <span className="text-sm text-gray-400">890 постов</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      #творчество
                    </Badge>
                    <span className="text-sm text-gray-400">654 постов</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Groups */}
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Icon
                    name="Users2"
                    size={20}
                    className="mr-2 text-cyan-400"
                  />
                  Рекомендуемые группы
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {groups.map((group, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{group.name}</h4>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-pink-500/50 text-pink-300 hover:bg-pink-500/20"
                      >
                        Вступить
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Icon name="Users" size={14} />
                      <span>{group.members.toLocaleString()} участников</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-2 text-xs border-gray-600 text-gray-300"
                    >
                      {group.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
