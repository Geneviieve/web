/* =========================================================
   Project data, single source of truth for the whole site.
   Categories: 'uiux' | 'ml'
   ========================================================= */
window.PROJECTS = [

/* ---------------- UI/UX ---------------- */
{
  id:"grevur", cat:"uiux", catLabel:"UI/UX Design", year:"2025",
  title:"Grevur, Circular Economy App",
  card:"portfodetails/uiuxpreGre1.png",
  summary:"Merging secondhand trading with a waste-deposit reward system to make sustainable living simple and rewarding.",
  role:"UI/UX Designer", type:"Group academic project", tools:["Figma","User Research","Mobile Design"],
  links:{},
  blocks:[
    {h:"Context & Problem", p:[
      "In Indonesia, waste-sorting habits remain low while the secondhand market is fragmented. People want to live more sustainably, but the process often feels inconvenient and unrewarding.",
      "We asked: what if we connected these two behaviours, trading used goods and sorting waste, with a single, clear incentive?"]},
    {h:"Research & Insights", p:[
      "Through desk research and user interviews, we found a key insight: people are willing to trade used items but see no direct benefit in sorting waste. That gap became the heart of the product."]},
    {h:"The Solution, Three Core Pillars", p:["We designed Grevur to be friendly, transparent, and motivating, built on three pillars:"],
      pillars:[
        {t:"Goods Exchange", d:"A secondhand marketplace for trading pre-loved items."},
        {t:"Waste2Points", d:"A waste-deposit system that converts sorting into redeemable points."},
        {t:"Eco-AI Assistant", d:"An AI chatbot and impact estimator that guides sustainable choices."}]},
    {callout:"One app for both selling and recycling."},
    {h:"My Role & Outcome", p:[
      "As UI/UX Designer on the team, I contributed to user research synthesis and led interface and prototype design in Figma. We produced high-fidelity prototypes that received positive feedback, validating our direction.",
      "What I learned: how to translate behavioural insight into an incentive system, and how to keep a multi-feature app feeling simple rather than overwhelming."]},
    {h:"Designs", gallery:["portfodetails/uiuxGre1.png","portfodetails/uiuxGre2.png","portfodetails/uiuxGre3.png"]}
  ]
},
{
  id:"notora", cat:"uiux", catLabel:"UI/UX Design", year:"2025",
  title:"Notora, Smarter Note-Taking",
  card:"portfodetails/uiuxpreNot1.png",
  summary:"Transforming notes from passive storage into active learning material with intelligent, automated features.",
  role:"UI/UX Designer", type:"Group academic project", tools:["Figma","User Research","Mobile Design"],
  links:{},
  blocks:[
    {h:"Context & Problem", p:[
      "Traditional note-taking apps only provide storage, they don't actively support learning or retention. Users struggle with information overload and forget to revisit what matters."]},
    {h:"Research & Insights", p:[
      "Interviews with students surfaced two pain points: taking notes during fast-paced lectures is stressful, and reviewing long notes before exams is time-consuming. That pointed to a clear opportunity for automation."]},
    {callout:"How might we turn passive notes into active study aids, automatically?"},
    {h:"The Solution, An Intelligent Study Flow", p:["We designed Notora around the natural study flow, embedding AI at each critical step:"],
      pillars:[
        {t:"Speech-to-Text", d:"Real-time transcription for lectures and meetings."},
        {t:"AI Summarizer", d:"Condenses notes down to the key points."},
        {t:"Flashcard Maker", d:"Auto-generates flashcards to support active recall."}]},
    {h:"My Role & Outcome", p:[
      "As a UI/UX Designer, I helped shape the study-flow concept and designed the interface and prototype. The \"summarize + flashcard\" combination was highly valued in feedback for cutting study-prep time.",
      "What I learned: designing for an AI-assisted workflow means making the automation feel trustworthy and in the user's control."]},
    {h:"Designs", gallery:["portfodetails/uiuxNot1.png","portfodetails/uiuxNot2.png","portfodetails/uiuxNot3.png"]}
  ]
},
{
  id:"narraitive", cat:"uiux", catLabel:"UI/UX Design", year:"2025",
  title:"NarrAItive, Humanized Health Insights",
  card:"portfodetails/uiuxpreNar1.png",
  summary:"Making health data accessible and empowering for users who struggle to make sense of raw metrics.",
  role:"UI/UX Designer", type:"Group academic project", tools:["Figma","User Research","Accessibility"],
  links:{},
  blocks:[
    {h:"Context & Problem", p:[
      "Health-tracking metrics are useful but can be overwhelming, especially for elderly users. Important signals get ignored simply because people can't translate complex numbers into meaning."]},
    {h:"Research & Insights", p:[
      "Interviews with older adults and caregivers revealed a desire for clear, empathetic feedback rather than charts alone, a system that doesn't just track, but tells the story of the user's health."]},
    {callout:"Sometimes users don't want more charts; they want to know if they're doing okay."},
    {h:"The Solution, A Health Companion", p:["We envisioned NarrAItive as a companion that turns data into stories and gentle, actionable advice:"],
      pillars:[
        {t:"Narrative Reports", d:"Automatic daily summaries written in plain, natural language."},
        {t:"Simple Recommendations", d:"Actionable tips tied directly to the user's own trends."},
        {t:"Health AI Assistant", d:"Conversational answers to health questions, in everyday language."}]},
    {h:"My Role & Outcome", p:[
      "As a UI/UX Designer, I focused the prototype on accessibility, large fonts and voice narration. Feedback appreciated the \"health storytelling\" approach for reducing anxiety around complex numbers.",
      "What I learned: accessibility and empathy are design constraints that make a product better for everyone, not just the target group."]},
    {h:"Designs", gallery:["portfodetails/uiuxNar1.png","portfodetails/uiuxNar2.png","portfodetails/uiuxpreNar2.png","portfodetails/uiuxpreNar3.png"]}
  ]
},
{
  id:"pos-system", cat:"uiux", catLabel:"Freelance · Web/App", year:"2025",
  title:"Unified POS System",
  card:"portfodetails/uiuxpreF3A.png",
  summary:"A single point-of-sale experience uniting billiard bookings, bar, and restaurant orders, with QR-based self-service.",
  role:"Web UI/UX Designer", type:"Freelance · Solo (client work)", tools:["Figma","Client Collaboration","Application Design"],
  links:{},
  blocks:[
    {h:"The Brief & Challenge", p:[
      "This commissioned project was for a billiard venue that also ran a bar and restaurant. The client wanted one POS system to handle very different needs: booking billiard tables, managing bar and restaurant orders, and processing payments seamlessly.",
      "Unlike a standard POS, it needed a QR-based flow so customers could scan, book, and pay from their phones, while keeping the staff-facing bar and restaurant POS simple and fast. A digital booklet to explain the system was also part of the deliverable."]},
    {h:"Process & Outcome", p:[
      "I mapped the distinct user journeys, customers booking and paying via QR, staff managing sessions and orders, admins overseeing reports and inventory, then built wireframes and prototypes in Figma, iterating closely with the client on each flow.",
      "The final design combined three business models into one seamless POS, paired with an onboarding booklet for stakeholder presentations. It reduced confusion between services while giving customers a fast, frictionless experience.",
      "What I learned: how to translate diverse, real-world business operations into one intuitive system, and how to guide a client from a loose brief to a concrete product."]},
    {h:"Showcase", gallery:["portfodetails/uiuxF3A-1.png","portfodetails/uiuxF3A-2.png","portfodetails/uiuxF3A-3.png","portfodetails/uiuxF3B-1.png"]},
    {note:"As freelance client work, some details are kept private. Happy to walk through the full process personally."}
  ]
},
{
  id:"freelance-web", cat:"uiux", catLabel:"Freelance · Web", year:"2024–25",
  title:"Freelance Web & Company Profiles",
  card:"portfodetails/uiuxpreF2.png",
  summary:"A set of commissioned websites, company profiles and a community platform, turning non-technical client visions into clean, effective web experiences.",
  role:"Web UI/UX Designer", type:"Freelance · Solo (client work)", tools:["Figma","Client Collaboration","Web Design","User Research"],
  links:{},
  blocks:[
    {h:"The Brief", p:[
      "Across several freelance commissions, I worked with clients who had a clear vision but no technical brief, and turned their ideas into real, effective websites, from business company profiles to a community platform.",
      "My role throughout was the same: listen, sketch, align on direction, prototype in Figma, then implement clean, accessible, easy-to-navigate sites."]},
    {h:"Company Profile, Tech Business", p:[
      "A company-profile website for a digital/technology business (\"Smart Tech, Smarter Business\"), presenting their services, web and mobile app development, and establishing a credible online presence."]},
    {gallery:["portfodetails/uiuxF2.png","portfodetails/uiuxF2-1.png","portfodetails/uiuxF3.png"]},
    {h:"Community Website", p:[
      "A website for a community organisation, a clean, welcoming space for events, updates, and connection that reflects the community's identity."]},
    {gallery:["portfodetails/uiuxF1.png","portfodetails/uiuxF1-1.png"]},
    {h:"What I Learned", p:[
      "How to guide non-technical clients from a vague idea to a concrete product, manage feedback through iteration, and deliver real client work under real constraints."]},
    {note:"As freelance client work, some details are kept private. Happy to walk through the full process personally."}
  ]
},

/* ---------------- DATA & ML ---------------- */
{
  id:"thesis", cat:"ml", catLabel:"Thesis · NLP", year:"2025–26", wip:true,
  title:"Normalizing Unstructured Jakarta Addresses with Small Language Models",
  card:"portfodetails/mlPre8.png",
  summary:"My undergraduate thesis, a research paper on normalizing messy, real-world Jakarta addresses with a fine-tuned Small Language Model, paired with deterministic verification and confidence-state reporting.",
  role:"Co-author / Researcher", type:"Undergraduate thesis · with a co-author & supervising lecturer (BINUS) · In progress", tools:["Python","Llama-3.1-8B","QLoRA","NLP","Hugging Face"],
  links:{},
  blocks:[
    {h:"The Problem", p:[
      "Precise geospatial data is essential for banking, e-commerce, and logistics. With e-commerce in Indonesia growing nearly 500% from 2015–2019, last-mile delivery is under pressure, and the absence of national addressing standards makes it worse.",
      "Indonesian addresses, especially in Jakarta, are written inconsistently: abbreviations, missing fields, varied ordering, informal spellings, and conversational phrasing. That makes them hard to match, geocode, or analyse reliably."]},
    {h:"The Approach", p:[
      "The system pairs a QLoRA fine-tuned Meta-Llama-3.1-8B-Instruct model with a deterministic verification module (AdminVerifier) in a two-stage hybrid inference pipeline, governed by a clear \"null-honesty\" principle, the model reports a confidence state rather than guessing when information is missing.",
      "To train it, I built a dataset using a rule-based pipeline that injects realistic administrative gaps from Jakarta's master data, with an external LLM used only to generate natural-language conversational prefixes (e.g. “tolong kirim ke…”) and syntactic noise such as typos and abbreviations."]},
    {h:"Why It Matters", p:[
      "Reliable address normalization underpins logistics, e-commerce delivery, public services, and spatial analysis across Indonesia. Doing it with a small, efficient model, instead of a large proprietary one, keeps it practical and deployable."]},
    {callout:"Honest about uncertainty: the model says when it doesn't know, instead of inventing an address."},
    {note:"Co-authored research conducted at Bina Nusantara University. In progress, full results and the published write-up are on the way."}
  ]
},
{
  id:"nlp-classifier", cat:"ml", catLabel:"NLP", year:"2025",
  title:"Dual-Stage NLP Classifier for Motivational Quotes",
  card:"portfodetails/mlPre2.png",
  summary:"A two-stage NLP system that detects whether a quote is motivational, then classifies its motivational theme.",
  role:"Developer", type:"Academic final project (NLP)", tools:["Python","DistilBERT","RoBERTa","FastText","Pandas","PyTorch"],
  links:{github:"https://github.com/Geneviieve/NaturalLanguageProcessing_FinPro"},
  blocks:[
    {h:"Goal", p:[
      "Stage 1 decides whether a given sentence is a motivational quote (binary classification). Stage 2 then predicts which motivational category it belongs to, resilience, perseverance, growth, positivity, and similar (multiclass)."]},
    {h:"Approach", p:[
      "I preprocessed and cleaned the text with Python, Pandas, and NumPy, then built the binary classifier using TF-IDF + Logistic Regression to filter motivational from non-motivational text.",
      "For the second stage, I experimented with FastText, DistilBERT, and RoBERTa to categorize the quotes, evaluating each with accuracy, precision, and recall."]},
    {h:"What I learned", p:[
      "Hands-on experience designing a multi-stage NLP pipeline and comparing classical and transformer-based models for the same task."]},
    {h:"Sample", gallery:["previews/sentimentanalysis.PNG"]}
  ]
},
{
  id:"image-denoising", cat:"ml", catLabel:"Deep Learning · U-Net", year:"2025",
  title:"Image Denoising (Dirty Documents)",
  card:"portfodetails/mlPre10.png",
  summary:"A U-Net autoencoder that cleans noisy scanned documents, removing stains, wrinkles, and shadows while keeping text sharp for better OCR.",
  role:"Co-developer", type:"Academic / Deep Learning final project · GROUP (3 members)", tools:["Python","TensorFlow / Keras","U-Net","OpenCV","Streamlit","PyTesseract"],
  links:{github:"https://github.com/Geneviieve/Image-Denoising_DeepLearning-FinalProject"},
  blocks:[
    {h:"The Problem", p:[
      "Digitizing old or handwritten documents often produces 'dirty' images full of stains, wrinkles, shadows, and noise, which makes it hard for OCR systems to read the text accurately."]},
    {h:"The Approach", p:[
      "We implemented a custom U-Net autoencoder that learns to map dirty input images to their clean ground-truth versions. Instead of resizing whole documents (which destroys text resolution), we trained on random 256x256 patches so the model learns high-frequency detail.",
      "For inference, a Streamlit app uses a sliding-window technique to process full A4 pages without distortion, and PyTesseract checks OCR readability on the cleaned output."]},
    {h:"Results", p:[
      "The model reached an SSIM of about 0.998 and a PSNR of about 38 dB, turning noisy scans into clean, sharp, readable documents."],
      gallery:["https://raw.githubusercontent.com/Geneviieve/Image-Denoising_DeepLearning-FinalProject/main/cleaned.png"]},
    {callout:"From noisy scans to clean, readable documents."},
    {h:"My Role", p:[
      "A group project (Group 8): Jessica Priscilla Immanuel, Marsha Genevieve Nandana, and Ricardo Cuthbert. I contributed across the model and pipeline, from the patch-based training strategy through to the denoising results."]}
  ]
},
{
  id:"generated-image-prediction", cat:"ml", catLabel:"Deep Learning · GAN", year:"2025",
  title:"Generated Image Prediction",
  card:"portfodetails/mlPre9.png",
  summary:"A deep-learning midterm exploring image generation with GANs, plus a classifier that distinguishes real images from AI-generated (fake) ones.",
  role:"Developer", type:"Academic / Deep Learning midterm", tools:["Python","TensorFlow / Keras","GAN","CNN"],
  links:{github:"https://github.com/Geneviieve/Generated_Image_Prediction"},
  blocks:[
    {h:"Goal", p:[
      "The project has two objectives: generate synthetic images from noise using a Generative Adversarial Network (GAN), and build a classifier that detects whether an image is real or AI-generated."]},
    {h:"Approach", p:[
      "For generation, I built a GAN (generator and discriminator) and trained it to produce synthetic images from random noise, watching the output quality improve across hundreds of epochs.",
      "For detection, I trained a CNN on a mix of real and generated images to classify each as real or fake, then used it to validate how convincing the generated images were."]},
    {h:"Output", p:[
      "Below: the GAN's training progress over 500 epochs, and a sample of the generated images."],
      gallery:["https://raw.githubusercontent.com/Geneviieve/Generated_Image_Prediction/main/outputVisuals500epochs.gif","https://raw.githubusercontent.com/Geneviieve/Generated_Image_Prediction/main/image_at_epoch_0500.png"]},
    {h:"What I learned", p:[
      "How GANs are structured and trained, and how a classifier can be used to evaluate the realism of generated images."]}
  ]
},
{
  id:"eda-portfolio", cat:"ml", catLabel:"Data Analysis", year:"2025",
  title:"Exploratory Data Analysis (EDA) Portfolio",
  card:"portfodetails/mlPre1.png",
  summary:"A collection documenting my approach to cleaning, exploring, and visualizing data to build model-ready foundations.",
  role:"Developer", type:"Self-initiated portfolio", tools:["Python","Jupyter","Pandas","NumPy","Matplotlib/Seaborn"],
  links:{github:"https://github.com/Geneviieve/EDA-Portfolio"},
  blocks:[
    {h:"Goal", p:[
      "Real-world data is rarely clean, it's full of missing values, inconsistencies, and outliers. This portfolio shows how I approach EDA across diverse datasets to make data trustworthy before modeling."]},
    {h:"Process", p:[
      "I start with cleaning: handling missing values, correcting formats, ensuring consistency. Then I use descriptive statistics and visualizations to uncover trends, correlations, and anomalies, and to understand relationships between variables.",
      "The outcome is structured, model-ready datasets backed by clear visual insight, with the full workflow documented in Jupyter notebooks for transparency."]},
    {callout:"Data tells a story; EDA makes sure it's the right one."},
    {h:"Datasets explored", p:[
      "The portfolio works through a range of public datasets, including 911 emergency calls, avocado prices, global air pollution, medical insurance costs, the Palmer Penguins dataset, and Telco customer churn. Each one brings out different cleaning challenges and a different set of questions worth asking."]},
    {h:"Sample Visualization", gallery:["previews/eda.PNG"]}
  ]
},
{
  id:"spotify-recommender", cat:"ml", catLabel:"Machine Learning", year:"2025",
  title:"Spotify Song Recommender System",
  card:"portfodetails/mlPre3.png",
  summary:"A content-based recommender that suggests songs with similar audio characteristics to a track you love.",
  role:"Developer", type:"Self-initiated project", tools:["Python","Pandas","Content-Based Filtering"],
  links:{github:"https://github.com/Geneviieve/Spotify-Song-Recommender-System"},
  blocks:[
    {h:"Goal", p:[
      "Recommend songs based on the similarity of their audio features, so users can discover new music aligned with their taste."]},
    {h:"Approach", p:[
      "Using the \"30,000 Spotify Songs\" dataset from Kaggle, I applied content-based filtering over audio features such as danceability, energy, tempo, and valence to compute song-to-song similarity and generate personalized recommendations."]},
    {h:"Sample", gallery:["previews/spot.PNG"]}
  ]
},
{
  id:"text-similarity", cat:"ml", catLabel:"NLP", year:"2025",
  title:"Text Semantics Similarity Checker",
  card:"portfodetails/mlPre6.png",
  summary:"An NLP tool that measures how closely two texts align in meaning, applied to resume–job-description matching.",
  role:"Developer", type:"Self-initiated project", tools:["Python","Sentence-Transformers (SBERT)","Cosine Similarity"],
  links:{github:"https://github.com/Geneviieve/Text-Semantics-Similarity-Checker"},
  blocks:[
    {h:"Goal", p:[
      "Comparing keywords alone misses true meaning. This tool grasps underlying semantics to score similarity even when the wording is completely different, useful for plagiarism detection, search, and resume matching."]},
    {h:"Approach", p:[
      "I used the pre-trained Sentence-BERT (SBERT) model to convert sentences into high-dimensional vectors, then measured similarity with cosine similarity. In this use case, it's applied to matching resumes against job descriptions."]},
    {h:"Sample", gallery:["previews/sim.PNG"]}
  ]
},
{
  id:"churn-detector", cat:"ml", catLabel:"ML · Business", year:"2025",
  title:"Telco Customer Churn Detector",
  card:"portfodetails/mlPre4.png",
  summary:"A model that flags customers at high risk of churning so a business can act before they leave.",
  role:"Developer", type:"Self-initiated project", tools:["Python","Logistic Regression","Random Forest","XGBoost"],
  links:{github:"https://github.com/Geneviieve/customer-churn-detector"},
  blocks:[
    {h:"Goal", p:[
      "Retaining customers costs far less than acquiring new ones. The goal was to find hidden patterns in historical data that signal an intent to churn, enabling intervention before a customer actually leaves."]},
    {h:"Approach", p:[
      "I began with data cleaning, EDA for insight, and feature engineering, then built and compared several classifiers (Logistic Regression, Random Forest, and XGBoost) to identify at-risk customers for targeted retention offers."]}
  ]
},
{
  id:"ac-recommendation", cat:"ml", catLabel:"ML · Classification", year:"2025",
  title:"AC Type Recommendation System",
  card:"portfodetails/mlPre5.png",
  summary:"A smart system that recommends the most suitable air-conditioner model from a room's conditions.",
  role:"Developer", type:"Self-initiated project", tools:["Python","Random Forest","Streamlit"],
  links:{github:"https://github.com/Geneviieve/AC-Recommendation", demo:"https://www.youtube.com/watch?v=IUvhIu0Zb3A"},
  blocks:[
    {h:"Goal", p:[
      "Choosing the right AC is tricky once you factor in room volume, height, and environment. The system predicts the optimal AC type from room area, height, temperature, and humidity to maximize comfort and efficiency."]},
    {h:"Approach", p:[
      "A Random Forest model trained on AC catalogue specs combined with room-condition samples maps inputs to physical AC types. A Streamlit prototype lets users enter their room conditions and get a real-time recommendation."]},
    {callout:"The right AC isn't just about cooling power, it's about matching the model to your room."},
    {h:"Sample", gallery:["previews/ac.PNG"]}
  ]
},
{
  id:"titanic", cat:"ml", catLabel:"ML · Classification", year:"2025",
  title:"Titanic Survival Prediction",
  card:"portfodetails/mlPre7.png",
  summary:"A classic ML rite of passage, predicting survival on the Titanic from demographic and ticket data.",
  role:"Developer", type:"Practice / introductory project", tools:["Python","Logistic Regression","Random Forest","SVM"],
  links:{github:"https://github.com/Geneviieve/ASG_Titanic-Survival-Prediction"},
  blocks:[
    {h:"Goal", p:[
      "Predict whether a passenger survived, using features such as age, gender, class, and fare, a small but iconic dataset, perfect for practising feature engineering and classification."]},
    {h:"Approach", p:[
      "I cleaned the data, handled missing ages, encoded categorical variables, and explored survival patterns, then tested Logistic Regression, Random Forest, and SVM. The final model reached solid accuracy and confirmed well-known patterns, higher survival for women and first-class passengers."]},
    {h:"Sample", gallery:["previews/titanic.PNG"]}
  ]
}

];
