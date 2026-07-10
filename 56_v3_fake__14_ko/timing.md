# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "윤슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-13",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '해브 앤 해브 노츠' 마지막 회 보셨어요? 기억이 잘  | S2 아, 네. 그 드라마가 좀 힘들었죠. 주인공은 어떻게 됐어요? | S3 새로운 도시… 그래요… | S4 …저도 이사 온 지 얼마 안 됐거든요.

     0.00s  user  발화 시작: 혹시 '해브 앤 해브 노츠' 마지막 회 보셨어요? 기억이 잘 안 나네요.
     4.76s  <ret> 발화 (turn1 첫 프레임)
     4.86s  user  발화 끝
     4.92s  agent 발화 시작: <ret> 어떤 점이 궁금하신가요?
     4.92s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.75s]: Exhausted.
     6.61s  agent 발화 시작: 마지막 회는 등장인물들이 완전히 지쳐버린 모습으로 끝맺었습니다. 각자의 삶에 대한 깊은 고민과 함께요.
     6.68s  agent 발화 끝
    14.17s  agent 발화 끝
    15.60s  user  발화 시작: 아, 네. 그 드라마가 좀 힘들었죠. 주인공은 어떻게 됐어요?
    19.09s  <ret> 발화 (turn4 첫 프레임)
    19.21s  user  발화 끝
    19.24s  agent 발화 시작: <ret> 주인공은 여러 어려움을 겪었지만, 결국에는 자신의 발로 일어섰습니다. 새로운 시작을 다짐했죠.
    19.25s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.80s]: The average high temperature in Reykjavik, Iceland in January is -1.5°
    24.03s  user  발화 시작: 아.
    24.51s  user  발화 끝
    25.97s  agent 발화 시작: 힘든 시간을 겪고 일어서는 모습은 정말 인상적이었어요. 새로운 도시에 정착하는 과정과 비슷하죠.
    26.04s  agent 발화 끝
    33.62s  agent 발화 끝
    33.85s  user  발화 시작: 새로운 도시… 그래요…
    35.79s  user  발화 끝
    37.48s  user  발화 시작: …저도 이사 온 지 얼마 안 됐거든요.
    39.67s  agent 발화 시작: 이사 오신 지 얼마 안 되셨다니, 적응이 쉽지 않으실 텐데요. 혹시 제가 도와드릴 일이 있을까요?
    39.73s  user  발화 끝
    46.34s  agent 발화 끝
