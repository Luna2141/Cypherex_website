use actix_web::{web, App, HttpServer, HttpResponse};

async fn greet() -> HttpResponse {
    HttpResponse::Ok().json("Hello from Rust!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/api/greet", web::get().to(greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
