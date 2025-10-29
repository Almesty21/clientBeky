import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import {
  FileTextOutlined,
  MailOutlined,
  BookOutlined,
  HeartOutlined,
  FormOutlined,
  VideoCameraOutlined,
  UsergroupAddOutlined,
  EditOutlined,
  BranchesOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import ArticleForm from '../components/article/createArticles';
import ArticlesList from '../components/article/ArticleList';
import BlogForm from '../components/blog/Blog';
import BlogsList from '../components/blog/BlogList';
import ContactForm from '../components/Contact';
import LatestForm from '../components/Latest';
import PartnerForm from '../components/Partner';
import PodcastForm from '../components/Podcast';
import ScholarshipForm from '../components/Scholar';
import VacancyForm from '../components/Vacancy';
import SubscriptionList from '../components/Subscription';
import UserForm from '../components/UserForm';
import Logout from './Logout';
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('articleForm');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auths/check-auth', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [navigate]);
  const renderContent = () => {
    switch (selectedMenu) {
      case 'articlesList':
        return <ArticlesList/>;
      case 'blogForm':
        return <BlogForm />;
      case 'blogList':
        return <BlogsList />;
      case 'contactForm':
        return <ContactForm />;
      case 'latestForm':
        return <LatestForm />;
      case 'partnerForm':
        return <PartnerForm />;
      case 'podcastForm':
        return <PodcastForm />;
      case 'scholarshipForm':
        return <ScholarshipForm />;
      case 'subscriptionList':
        return <SubscriptionList />;
      case 'vacancyForm':
        return <VacancyForm />;
      default:
        return <ArticleForm />;
    }
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="1">
        Profile
      </Menu.Item>
      <Menu.Item key="2">
        Settings
      </Menu.Item>
      <Menu.Item key="3">
        Logout
      </Menu.Item>
    </Menu>
  );
  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo p-4 text-white text-center text-xl">
          Dashboard
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenu]}
          onClick={(e) => setSelectedMenu(e.key)}
        >
          <Menu.Item key="articlesList" icon={<FileTextOutlined />}>
            Article List
          </Menu.Item>
          <Menu.Item key="blogForm" icon={<BookOutlined />}>
            Blog Form
          </Menu.Item>
          <Menu.Item key="blogList" icon={<BookOutlined />}>
            Blog List
          </Menu.Item>
          <Menu.Item key="contactForm" icon={<MailOutlined />}>
            Contact Form
          </Menu.Item>
          <Menu.Item key="latestForm" icon={<HeartOutlined />}>
            Latest Form
          </Menu.Item>
          <Menu.Item key="partnerForm" icon={<BranchesOutlined />}>
            Partner Form
          </Menu.Item>
          <Menu.Item key="podcastForm" icon={<VideoCameraOutlined />}>
            Podcast Form
          </Menu.Item>
          <Menu.Item key="scholarshipForm" icon={<FormOutlined />}>
            Scholarship Form
          </Menu.Item>
          <Menu.Item key="subscriptionList" icon={<UsergroupAddOutlined />}>
            Subscription List
          </Menu.Item>
          <Menu.Item key="vacancyForm" icon={<EditOutlined />}>
            Vacancy Form
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 20px' }}>
          <div className="flex justify-between items-center">
            <span>Header Content</span>
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <div className="cursor-pointer flex items-center">
                <Avatar icon={<UserOutlined />} />
                <DownOutlined className="ml-2" />
              </div>
            </Dropdown>
          </div>
          <div className="float-right mr-4 mt-4">
            <Logout />
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
