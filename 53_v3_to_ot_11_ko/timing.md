# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였는지  | S2 아, 그렇군요. 그 경기 보셨어요? | S3 잠깐만, 엄마, 지금 전화 좀 할게. | S4 죄송해요, 잠시만요. 그래서, 그 경기에서 애슬레틱스 타선이 

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였는지 아세요? 너무 오래된 것 같아서…
     6.56s  <ret> 발화 (turn1 첫 프레임)
     6.79s  agent 발화 시작: <ret> 야구 기록은 꽤 오래되고 복잡하죠. 두천십팔년 사월 이십일이 가장 최근 기록이에요. 디트로이트 타
     6.85s  user  발화 끝
     7.68s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.88s]: [source: Wikipedia] On April 21, 2018, the Oakland Athletics were no-h
    14.85s  user  발화 시작: 맞아요.
    15.67s  user  발화 끝
    17.17s  agent 발화 끝
    17.63s  user  발화 시작: 아, 그렇군요. 그 경기 보셨어요?
    19.89s  user  발화 시작: 잠깐만, 엄마, 지금 전화 좀 할게.
    20.03s  user  발화 끝
    22.58s  user  발화 시작: 죄송해요, 잠시만요. 그래서, 그 경기에서 애슬레틱스 타선이 완전히 막혔다니, 좀 놀랍네요.
    22.66s  user  발화 끝
    28.93s  agent 발화 시작: 그 날은 타자들이 좀 힘이 안 들어간 날이었던 것 같아요. 기록을 보니, 피어스가 정말 잘 던졌더라고요.
    29.01s  user  발화 끝
    35.05s  agent 발화 끝
