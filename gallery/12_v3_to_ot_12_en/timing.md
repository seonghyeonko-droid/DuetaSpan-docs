# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Leo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "home",
#       "text": "User's home address is 197 Oak Avenue."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Fox, quick question – who was  | S2 Wow, really? I didn't know that. U | S3 Did you take out the trash, honey? | S4 …never mind. Fox, what’s the weath

     0.00s  user  발화 시작: Hey Fox, quick question – who was the first Indian batsman t
     6.50s  <ret> 발화 (turn1 첫 프레임)
     6.73s  agent 발화 시작: <ret> That would be Virender Sehwag, actually—he made histor
     6.73s  user  발화 끝
     7.26s  ⚡SPAN 주입 [d'=0.76s / d_lead=6.73s]: Virender Sehwag was the first Indian batsman to score a triple century
    13.47s  user  발화 시작: Oh.
    13.47s  agent 발화 끝
    13.82s  user  발화 시작: Wow, really? I didn't know that. Uh, my wife just asked if I
    13.82s  user  발화 끝
    20.56s  user  발화 시작: Did you take out the trash, honey?
    20.56s  user  발화 끝
    23.04s  user  발화 시작: …never mind. Fox, what’s the weather like in Seoul right now
    23.04s  user  발화 끝
    26.57s  <ret> 발화 (turn6 첫 프레임)
    26.87s  ⚡SPAN 주입 [d'=0.31s / d_lead=7.09s]: (tool result) Current conditions in Seoul are 26.0°C, humidity 68%, wi
    26.94s  agent 발화 시작: <ret> Right now in Seoul, it’s 26.0°C with 68% humidity, and
    26.94s  user  발화 끝
    34.03s  user  발화 시작: Exactly.
    34.03s  agent 발화 끝
    34.38s  agent 발화 시작: It's interesting how focusing on something new, like the wea
    34.38s  user  발화 끝
    40.41s  agent 발화 끝
