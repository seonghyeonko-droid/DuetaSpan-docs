# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Sophie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m planning a wine tasting trip,  | S2 Wow, thirteen varieties! That’s a  | S3 Eighteen? That’s even more. | S4 That sounds great, actually. I’d l

     0.00s  user  발화 시작: I’m planning a wine tasting trip, and I’m curious about the 
     4.61s  agent 발화 시작: The Rhône Valley is a fantastic choice for wine lovers! It’s
     4.61s  user  발화 끝
    12.05s  user  발화 시작: I’ve heard of Châteauneuf-du-Pape. Is that a good place to s
    12.05s  agent 발화 끝
    15.41s  <ret> 발화 (turn3 첫 프레임)
    15.95s  agent 발화 시작: <ret> It’s definitely a great place to begin, as Châteauneuf
    15.95s  user  발화 끝
    16.47s  ⚡SPAN 주입 [d'=1.05s / d_lead=9.22s]: Châteauneuf-du-Pape is the most famous appellation in the southern Rhô
    25.17s  user  발화 시작: Exactly.
    25.17s  agent 발화 끝
    25.53s  user  발화 시작: Wow, thirteen varieties! That’s a lot.
    25.53s  user  발화 끝
    27.65s  agent 발화 시작: It really is! That blending is what gives those wines their 
    27.65s  user  발화 끝
    31.91s  user  발화 시작: Yeah.
    31.91s  agent 발화 끝
    32.26s  user  발화 시작: Are there other areas that allow that many varieties?
    32.26s  user  발화 끝
    35.45s  agent 발화 시작: Mm-hmm.
    35.45s  user  발화 끝
    35.58s  <ret> 발화 (turn10 첫 프레임)
    35.81s  agent 발화 시작: <ret> Actually, other areas do too—the Côtes du Rhône wines 
    35.81s  agent 발화 끝
    37.08s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.15s]: The regulations for Côtes du Rhône wines permit the use of up to eight
    43.96s  user  발화 시작: Eighteen? That’s even more.
    43.96s  agent 발화 끝
    45.38s  agent 발화 시작: It allows winemakers a lot of freedom to—
    45.38s  user  발화 끝
    48.21s  user  발화 시작: …do they usually list all the grapes on the bottle?
    48.21s  agent 발화 끝
    51.63s  <ret> 발화 (turn14 첫 프레임)
    51.76s  agent 발화 시작: <ret> Not always, but many producers are starting to include
    51.76s  user  발화 끝
    52.98s  ⚡SPAN 주입(IRRELEVANT) [d'=1.35s / d_lead=8.15s]: The average high temperature in Fairbanks, Alaska in January is -17.8°
    59.91s  agent 발화 시작: I can also help you with planning your itinerary if you’d li
    59.91s  agent 발화 끝
    67.36s  user  발화 시작: That sounds great, actually. I’d like to spend about five da
    67.36s  agent 발화 끝
    71.61s  user  발화 끝
