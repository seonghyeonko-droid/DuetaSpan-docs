# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Iris",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hmm, I was wondering… who has won  | S2 Five is still amazing, but… quite  | S3 Yeah, um, what… | S4 Six! Another dominant player, then

     0.00s  user  발화 시작: Hmm, I was wondering… who has won the most Ballon d’Or award
     6.98s  <ret> 발화 (turn1 첫 프레임)
     7.15s  agent 발화 시작: <ret> That would be Lionel Messi, actually—he’s won the Ball
     7.15s  user  발화 끝
     7.28s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.43s]: Lionel Messi has won the Ballon d’Or award a record eight times, in 20
    18.58s  user  발화 시작: Wow, eight times! That’s… incredible. Is Cristiano Ronaldo a
    18.58s  agent 발화 끝
    23.29s  <ret> 발화 (turn4 첫 프레임)
    23.34s  agent 발화 시작: Exactly.
    23.34s  user  발화 끝
    23.76s  ⚡SPAN 주입 [d'=0.81s / d_lead=10.00s]: Cristiano Ronaldo has won the Ballon d’Or five times, in 2008, 2013, 2
    23.82s  agent 발화 시작: <ret> Cristiano Ronaldo has won it five times—in 2008, 2013,
    23.82s  agent 발화 끝
    33.83s  user  발화 시작: Wow.
    33.83s  agent 발화 끝
    34.30s  user  발화 시작: Five is still amazing, but… quite a gap. It feels good to ha
    34.30s  user  발화 끝
    42.88s  agent 발화 시작: It does, doesn’t it? Sometimes it’s comforting to see such c
    42.88s  user  발화 끝
    50.02s  user  발화 시작: Yeah, yeah.
    50.02s  agent 발화 끝
    50.98s  user  발화 시작: Yeah, um, what…
    50.98s  user  발화 끝
    52.41s  user  발화 시작: …about women’s football? Who’s the top scorer there?
    52.41s  user  발화 끝
    56.13s  <ret> 발화 (turn12 첫 프레임)
    56.22s  agent 발화 시작: Yeah.
    56.22s  user  발화 끝
    56.63s  ⚡SPAN 주입 [d'=1.50s / d_lead=10.48s]: Ada Hegerberg has won the Ballon d’Or Féminin a record six times, in 2
    56.69s  agent 발화 시작: <ret> Ada Hegerberg holds the record for the women’s Ballon 
    56.69s  agent 발화 끝
    67.17s  user  발화 시작: Six! Another dominant player, then. That’s inspiring.
    67.17s  agent 발화 끝
    70.51s  user  발화 끝
