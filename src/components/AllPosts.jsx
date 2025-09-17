const AllPosts = ({ posts }) => {
       
  return (
    <section>
        <div className="grid md:grid-cols-3 gap-4">
            
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="card p-4 rounded shadow">
                        <h2 className="text-xl font-semibold" style={{ color: 'var(--dark-text)' }}>{post.title.rendered}</h2>
                        <img
                            src={post._embedded['wp:featuredmedia']?.[0]?.source_url || '/images/fallback.jpg'}
                            alt={post.title.rendered}
                            className="w-full h-48 object-cover mb-2"
                        />
                        </div>
                    )
                    
                })

                }
        </div>
    </section>
  )
}

export default AllPosts