# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Louis",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Play Dilwale Dulhania Le Jayenge w | S2 Hmm, find me some Italian restaura | S3 I'm thinking of going to a concert | S4 …next week in Seoul.

     0.00s  user  발화 시작: Play Dilwale Dulhania Le Jayenge with Hindi subtitles, pleas
     4.48s  user  발화 끝
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> The movie is starting now with Hindi subtitles. It's a
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: (tool result) Playing Dilwale Dulhania Le Jayenge with Hindi subtitles
     6.51s  user  발화 시작: Right.
     6.96s  user  발화 끝
     8.48s  user  발화 시작: Uh, what’s the weather like in Seoul today?
     8.65s  agent 발화 끝
    10.73s  <ret> 발화 (turn4 첫 프레임)
    10.88s  agent 발화 시작: <ret> Well, right now in Seoul it is Friday, July tenth, two
    10.89s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.00s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
    11.06s  user  발화 끝
    14.31s  user  발화 시작: Yeah.
    14.85s  user  발화 끝
    15.75s  agent 발화 시작: The weather is twenty-three point zero degrees Celsius, with
    15.88s  agent 발화 끝
    18.34s  user  발화 시작: Yeah.
    18.79s  user  발화 끝
    23.95s  agent 발화 끝
    25.12s  user  발화 시작: Hmm, find me some Italian restaurants nearby.
    27.58s  <ret> 발화 (turn9 첫 프레임)
    27.90s  agent 발화 시작: <ret> I found a couple of Italian restaurants near you. Bell
    27.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.88s]: (tool result) Bella Italia — 4.5 stars, 0.8 km; Pasta Paradise — 4.2 s
    28.08s  user  발화 끝
    39.77s  agent 발화 끝
    41.15s  user  발화 시작: What was I saying about… friends?
    43.24s  <ret> 발화 (turn11 첫 프레임)
    43.31s  agent 발화 시작: <ret> You mentioned yesterday that you felt like you didn’t 
    43.32s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.04s]: [2026-07-09] I feel like I don't have anyone I can really talk to.
    43.37s  user  발화 끝
    48.15s  agent 발화 시작: That takes courage to admit, Vaera thinks. It's the first st
    48.36s  agent 발화 끝
    50.28s  user  발화 시작: Yeah, yeah.
    50.92s  user  발화 끝
    53.93s  agent 발화 끝
    54.43s  user  발화 시작: I'm thinking of going to a concert next week.
    56.63s  agent 발화 시작: That sounds fun! Concerts are a lovely way to share an exper
    56.77s  user  발화 끝
    61.57s  agent 발화 시작: Sometimes, just being in a crowd enjoying something together
    61.63s  agent 발화 끝
    66.19s  agent 발화 끝
    66.62s  user  발화 시작: Find me events happening…
    68.22s  user  발화 끝
    69.94s  user  발화 시작: …next week in Seoul.
    70.79s  <ret> 발화 (turn19 첫 프레임)
    71.18s  agent 발화 시작: <ret> Next week in Seoul, there’s a K-Pop Dance Festival on 
    71.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) K-Pop Dance Festival — July 17, Olympic Park; Seoul Jazz
    71.37s  user  발화 끝
    82.31s  user  발화 시작: Give me a moment… I need to check my schedule.
    82.44s  agent 발화 끝
    84.95s  user  발화 끝
    84.97s  agent 발화 시작: Take your time. I'll be here when you're ready.
    86.90s  ⚡지연 SPAN 주입(선제발표 직전): Support groups can offer a safe space to share experiences and build c
    87.39s  agent 발화 시작: <ret> I was thinking about what you said about feeling alone
    87.47s  agent 발화 끝
   100.62s  agent 발화 끝
