# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Elias",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know when the Luxor Hotel i | S2 What was happening in Vegas around | S3 I'm planning a trip there next mon | S4 That sounds amazing! Is it family-

     0.00s  user  발화 시작: Do you know when the Luxor Hotel in Las Vegas was built?
     4.44s  <ret> 발화 (turn1 첫 프레임)
     4.58s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.96s]: The Luxor Hotel and Casino opened in Las Vegas, Nevada, on March 31, 1
     4.64s  agent 발화 시작: <ret> The Luxor Hotel and Casino officially opened its doors
     4.64s  user  발화 끝
    11.60s  user  발화 시작: Yeah.
    11.60s  agent 발화 끝
    11.99s  user  발화 시작: Oh, 1993. I thought it was a little earlier.
    11.99s  user  발화 끝
    15.47s  agent 발화 시작: Wow.
    15.47s  user  발화 끝
    15.85s  agent 발화 시작: It's easy to get those dates mixed up with so many exciting 
    15.85s  agent 발화 끝
    22.04s  user  발화 시작: Uh-huh.
    22.04s  agent 발화 끝
    22.43s  user  발화 시작: What was happening in Vegas around that time, anyway?
    22.43s  user  발화 끝
    25.74s  <ret> 발화 (turn8 첫 프레임)
    25.91s  agent 발화 시작: <ret> The early nineties were a boom time for Las Vegas, wit
    25.91s  user  발화 끝
    26.64s  ⚡SPAN 주입 [d'=0.90s / d_lead=8.12s]: Las Vegas experienced significant growth in the early 1990s, with seve
    34.03s  user  발화 시작: So, both opened in the same year?
    34.03s  agent 발화 끝
    36.74s  agent 발화 시작: Yes, it was quite the year for new resorts on the strip—both
    36.74s  user  발화 끝
    44.86s  user  발화 시작: I'm planning a trip there next month. –
    44.86s  agent 발화 끝
    47.95s  user  발화 시작: …Are there any shows I should definitely see?
    47.95s  user  발화 끝
    50.87s  <ret> 발화 (turn14 첫 프레임)
    51.04s  agent 발화 시작: Yeah.
    51.04s  user  발화 끝
    51.43s  agent 발화 시작: <ret> "O" by Cirque du Soleil at the Bellagio has shows from
    51.43s  agent 발화 끝
    51.55s  ⚡SPAN 주입 [d'=0.68s / d_lead=8.89s]: (tool result) Event: "O" by Cirque du Soleil, Location: Bellagio, Date
    60.32s  user  발화 시작: Oh.
    60.32s  agent 발화 끝
    60.71s  agent 발화 시작: It's a very popular show, known for its stunning water acrob
    60.71s  user  발화 끝
    64.96s  user  발화 시작: That sounds amazing! Is it family-friendly?
    64.96s  agent 발화 끝
    67.04s  <ret> 발화 (turn18 첫 프레임)
    67.28s  agent 발화 시작: <ret> "O" is usually fine for families, though some scenes m
    67.28s  user  발화 끝
    67.34s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.57s]: "O" by Cirque du Soleil is generally considered family-friendly, thoug
    73.86s  user  발화 시작: Yeah, totally.
    73.86s  agent 발화 끝
    74.63s  user  발화 시작: Okay, good to know. Thanks for the information!
    74.63s  user  발화 끝
    77.72s  agent 발화 시작: Yeah.
    77.72s  user  발화 끝
    77.96s  <ret> 발화 (turn22 첫 프레임)
    78.11s  agent 발화 시작: <ret> You're very welcome! It's my pleasure to help you plan
    78.11s  agent 발화 끝
    78.26s  ⚡SPAN 주입(IRRELEVANT) [d'=0.30s / d_lead=5.03s]: The current temperature in Reykjavik, Iceland is 8.2°C, humidity 88%, 
    83.14s  agent 발화 시작: I'm glad I could offer some suggestions, and I hope you have
    83.14s  agent 발화 끝
    90.10s  agent 발화 끝
