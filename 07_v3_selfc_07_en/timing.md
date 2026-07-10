# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Jamie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "home",
#       "text": "User's home address is 443 Pine Court."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Could you please take a screenshot | S2 $59,000 sounds… low—uhhh, actually | S3 Digital archiving… that sounds com | S4 $4,000… that's reasonable. Do they

     0.00s  user  발화 시작: Could you please take a screenshot of the entire page and sa
     3.88s  <ret> 발화 (turn1 첫 프레임)
     4.12s  agent 발화 시작: <ret> I’ve saved a screenshot of this page as homepage.png i
     4.12s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.61s]: (tool result) Screenshot saved as /home/user/downloads/homepage.png
     4.30s  user  발화 끝
     9.73s  agent 발화 끝
     9.87s  user  발화 시작: That’s great, thanks. I’m feeling really overwhelmed with wo
    13.56s  user  발화 끝
    13.60s  agent 발화 시작: Oh, I understand. Work stress is so common, especially now. 
    20.99s  user  발화 시작: I’ve been thinking about a career change, actually. Somethin
    21.01s  agent 발화 끝
    25.71s  user  발화 끝
    25.88s  agent 발화 시작: That’s a big step, and a very valid consideration! It’s wond
    32.69s  agent 발화 끝
    32.76s  user  발화 시작: I was looking at becoming a librarian.
    34.72s  <ret> 발화 (turn7 첫 프레임)
    34.96s  agent 발화 시작: <ret> Librarians generally earn between $59,000 and $98,000 
    34.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: Librarians typically earn between $59,000 and $98,000 per year, depend
    35.11s  user  발화 끝
    43.07s  agent 발화 끝
    43.34s  user  발화 시작: $59,000 sounds… low—uhhh, actually, make that $65,000.
    49.78s  user  발화 끝
    49.84s  <ret> 발화 (turn9 첫 프레임)
    49.99s  agent 발화 시작: <ret> I found some librarian positions offering a salary of 
    50.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) Librarian positions offering $65,000+ salary - Indeed.co
    56.13s  user  발화 시작: Can you show me a few of those listings?
    56.48s  agent 발화 끝
    57.89s  <ret> 발화 (turn11 첫 프레임)
    58.29s  agent 발화 시작: <ret> Tavily shows several listings in major cities on Indee
    58.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: (tool result) Indeed.com: Librarian jobs with salaries over $65,000 - 
    58.44s  user  발화 끝
    61.50s  user  발화 시작: Oh.
    61.99s  user  발화 끝
    64.78s  user  발화 시작: Hmm, interesting. What about the job outlook for librarians?
    64.87s  agent 발화 끝
    68.73s  <ret> 발화 (turn14 첫 프레임)
    69.13s  agent 발화 시작: <ret> According to the Bureau of Labor Statistics, librarian
    69.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: The Bureau of Labor Statistics projects a 5% growth in employment for 
    69.32s  user  발화 끝
    73.02s  user  발화 시작: Nice.
    73.84s  user  발화 끝
    78.03s  agent 발화 끝
    79.68s  user  발화 시작: That's not bad. Is it a competitive field?
    82.04s  agent 발화 시작: It can be, yes, but skills in digital archiving and informat
    82.26s  user  발화 끝
    88.15s  agent 발화 끝
    88.84s  user  발화 시작: Digital archiving… that sounds complicated.
    92.07s  user  발화 끝
    92.52s  agent 발화 시작: It has a learning curve, but many online courses can help yo
    96.84s  user  발화 시작: …are there any courses specifically for career changers?
    97.66s  agent 발화 끝
    99.80s  <ret> 발화 (turn21 첫 프레임)
    99.96s  agent 발화 시작: <ret> Yes, several universities offer certificate programs s
    99.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: (tool result) Online Certificate in Library and Information Science - 
   100.08s  user  발화 끝
   107.39s  agent 발화 시작: The University of North Carolina at Chapel Hill offers an on
   107.51s  agent 발화 끝
   113.64s  agent 발화 끝
   114.14s  user  발화 시작: UNC Chapel Hill… that’s a good school. How long does that pr
   118.95s  <ret> 발화 (turn24 첫 프레임)
   119.10s  agent 발화 시작: <ret> It's a 12-credit program that you can complete in abou
   119.11s  ⚡SPAN 주입 [d'=0.72s / d_lead=5.19s]: The Online Certificate in Library and Information Science at UNC Chape
   119.23s  user  발화 끝
   124.29s  agent 발화 끝
   124.56s  user  발화 시작: Okay, that’s manageable. What about the cost?
   127.48s  <ret> 발화 (turn26 첫 프레임)
   127.72s  agent 발화 시작: <ret> Tavily reports tuition and fees for the program are ar
   127.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.37s]: (tool result) UNC Chapel Hill Library Science Certificate: $4,000 - Tu
   127.79s  user  발화 끝
   133.09s  agent 발화 끝
   134.35s  user  발화 시작: $4,000… that's reasonable. Do they offer any financial aid?
   139.17s  agent 발화 시작: Many universities offer financial aid options. You'd need to
   139.22s  user  발화 끝
   145.84s  agent 발화 끝
   147.91s  user  발화 시작: Right, of course. This is really helpful, Elelina.
   151.15s  user  발화 끝
   151.37s  agent 발화 시작: I’m so glad I could assist you! Taking that first step towar
   159.02s  agent 발화 끝
   159.13s  user  발화 시작: I feel a little less stressed already, just having a plan.
   162.36s  agent 발화 시작: That’s wonderful to hear! Remember, small steps can lead to 
   162.46s  user  발화 끝
   168.77s  user  발화 시작: Thank you.
   168.84s  agent 발화 끝
   169.40s  user  발화 끝
   169.41s  agent 발화 시작: You’re very welcome.
   170.93s  agent 발화 끝
