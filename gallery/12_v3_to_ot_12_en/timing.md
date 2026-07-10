# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Clara",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "home",
#       "text": "User's home address is 560 Elm Street."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, can you tell me which is the  | S2 What about area, specifically? Lik | S3 So, what’s the biggest then? The a | S4 Do you think living somewhere so b

     0.00s  user  발화 시작: Hey, can you tell me which is the third largest state in the
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.34s  agent 발화 시작: <ret> It’s interesting to think about size, isn’t it? Califo
     3.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: California is the most populous state in the United States and the thi
     3.60s  user  발화 끝
     5.22s  user  발화 시작: Yeah.
     5.72s  user  발화 끝
     9.24s  user  발화 시작: Oh, really? I always thought Texas was up there.
     9.32s  agent 발화 끝
    12.23s  agent 발화 시작: Texas *is* large, absolutely—it’s the second largest, actual
    12.29s  user  발화 끝
    17.51s  agent 발화 끝
    18.83s  user  발화 시작: What about area, specifically? Like, in square miles?
    22.75s  <ret> 발화 (turn6 첫 프레임)
    23.15s  agent 발화 시작: <ret> California covers an area of one hundred sixty-three t
    23.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: California covers an area of 163,696 square miles, according to the Un
    23.18s  user  발화 끝
    28.22s  user  발화 시작: …And is that including all the water area, like lakes and st
    28.99s  agent 발화 끝
    31.46s  <ret> 발화 (turn8 첫 프레임)
    31.75s  agent 발화 시작: <ret> The total area includes one hundred fifty-five thousan
    31.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.40s]: The total area of California includes 155,779.2 square miles of land a
    31.86s  user  발화 끝
    38.72s  user  발화 시작: Uh-huh.
    39.21s  user  발화 끝
    41.16s  agent 발화 끝
    41.17s  agent 발화 시작: It’s a really diverse landscape, which adds to its appeal, I
    45.02s  agent 발화 끝
    45.19s  user  발화 시작: So, what’s the biggest then? The absolute largest state?
    48.69s  <ret> 발화 (turn12 첫 프레임)
    49.09s  agent 발화 시작: <ret> Alaska is the largest, covering six hundred sixty-five
    49.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: Alaska is the largest state in the United States, with a total area of
    49.30s  user  발화 끝
    51.66s  user  발화 시작: Yeah.
    52.44s  user  발화 끝
    55.35s  agent 발화 끝
    55.92s  user  발화 시작: That’s huge! I guess everything is bigger in Alaska.
    59.76s  user  발화 끝
    59.87s  agent 발화 시작: It certainly has a reputation for vastness, and it’s well-de
    65.10s  agent 발화 끝
    65.66s  user  발화 시작: Do you think living somewhere so big changes how people thin
    68.82s  agent 발화 시작: I believe our surroundings certainly shape our perspective, 
    68.98s  user  발화 끝
    75.17s  agent 발화 끝
