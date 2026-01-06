package com.example.wildlife.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/wiki")
public class WikipediaController {

    private final RestClient client = RestClient.builder()
            .defaultHeader(
                    "User-Agent",
                    "WildlifeApp/1.0 (FH Campus Wien; student project)"
            )
            .defaultHeader("Accept", "application/json")
            .build();

    @GetMapping("/ursids")
    public String getUrsidsWikitext() {
        String response = client.get()
                .uri("https://en.wikipedia.org/w/api.php" +
                        "?action=parse" +
                        "&page=List_of_ursids" +
                        "&prop=wikitext" +
                        "&format=json")
                .retrieve()
                .body(String.class);

        try {
            // Parse JSON and extract ONLY the wikitext string
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response);
            return root
                    .path("parse")
                    .path("wikitext")
                    .path("*")
                    .asText();
        } catch (Exception e) {
            throw new RuntimeException("Failed to extract wikitext", e);
        }
    }



    @GetMapping("/image/{fileName}")
    public String getImageUrl(@PathVariable String fileName) {
        return client.get()
                .uri("https://en.wikipedia.org/w/api.php" +
                                "?action=query" +
                                "&titles=File:{fileName}" +
                                "&prop=imageinfo" +
                                "&iiprop=url" +
                                "&format=json",
                        fileName)
                .retrieve()
                .body(String.class);
    }
}
