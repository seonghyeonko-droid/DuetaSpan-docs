# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "다재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-19",
#       "category": "child",
#       "text": "User has a child named Rin, age 10."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "skill",
#       "text": "User is just getting back into marathon training."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-04-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 포유류에 속하는 목이 몇 개나 있을까요? | S2 아, 죄송해요. 다시 질문할게요. 혹시 그 스물아홉개 목에… | S3 …대해 좀 더 자세히 설명해 주실 수 있나요? | S4 오, 흥미롭네요. 감사합니다.

     0.00s  user  발화 시작: 포유류에 속하는 목이 몇 개나 있을까요?
     2.41s  <ret> 발화 (turn1 첫 프레임)
     2.73s  agent 발화 시작: <ret> 포유류에 속하는 목의 수는 총 스물아홉개입니다. 정말 다양한 종들이 포함되어 있죠.
     2.79s  user  발화 끝
     3.11s  ⚡SPAN 주입 [d'=0.71s / d_lead=5.93s]: There are 29 orders within the class Mammalia, encompassing a wide ran
     5.90s  user  발화 시작: 네.
     6.44s  user  발화 끝
     8.29s  user  발화 시작: 잠깐만, 김치냉장고 문 닫아 줘.
     8.66s  agent 발화 끝
    10.91s  user  발화 시작: 아, 죄송해요. 다시 질문할게요. 혹시 그 스물아홉개 목에…
    10.91s  user  발화 끝
    15.58s  user  발화 끝
    16.91s  user  발화 시작: …대해 좀 더 자세히 설명해 주실 수 있나요?
    19.44s  agent 발화 시작: 각 목은 고유한 특징과 생태적 지위를 가지고 있습니다.
    19.56s  user  발화 끝
    22.05s  user  발화 시작: 예.
    22.41s  user  발화 끝
    22.54s  user  발화 시작: 예를 들어 어떤 목들이 있을까요?
    22.92s  agent 발화 끝
    24.36s  <ret> 발화 (turn9 첫 프레임)
    24.59s  agent 발화 시작: <ret> 예를 들어, 짝발굽류에는 사슴과 하마가 있고, 영장류에는 원숭이와 사람, 식육류에는 개와 고양이가
    24.71s  user  발화 끝
    25.49s  ⚡SPAN 주입 [d'=1.14s / d_lead=7.85s]: Examples of mammalian orders include Artiodactyla (even-toed ungulates
    29.11s  user  발화 시작: 네네.
    29.70s  user  발화 끝
    32.44s  agent 발화 끝
    34.02s  user  발화 시작: 오, 흥미롭네요. 감사합니다.
    36.47s  user  발화 끝
