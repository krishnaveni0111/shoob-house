
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface BlogListingProps {
  posts: BlogPost[];
  categoryTitle: string;
  postCount: number;
}

const BlogListing = ({ posts, categoryTitle, postCount }: BlogListingProps) => {
  return (
    <section id="industry" className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionTitle 
          title={categoryTitle} 
          subtitle={`Showing ${postCount} articles`} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-card rounded-xl overflow-hidden shadow-card hover:transform hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
                <div className="absolute top-0 left-0 bg-shoob-500 text-white text-sm py-1 px-3">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                
                <Link 
                  to={`/blogs/${post.id}`} 
                  className="inline-flex items-center text-shoob-500 hover:text-shoob-600 font-medium"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="btn-outline">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
