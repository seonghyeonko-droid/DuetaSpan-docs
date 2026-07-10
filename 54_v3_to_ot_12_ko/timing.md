# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "우린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 미국에서 물 불소화가 언제 시작됐는지 궁금해요. | S2 어머, 진짜? | S3 아, 죄송해요. 잠시만요. | S4 아니요, 괜찮아요. 감사합니다.

     0.00s  user  발화 시작: 미국에서 물 불소화가 언제 시작됐는지 궁금해요.
     2.91s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> 물 불소화는 천구백사십오년 일월 이십오일에 시작되었어요.
     3.23s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.61s]: Fluoridation of water in the U.S. began on January 25, 1945.
     3.24s  user  발화 끝
     5.57s  user  발화 시작: 어머.
     6.06s  user  발화 끝
     6.83s  agent 발화 끝
     7.99s  user  발화 시작: 어머, 진짜?
     9.30s  user  발화 시작: 아, 죄송해요. 잠시만요.
     9.41s  user  발화 끝
    11.39s  <ret> 발화 (turn5 첫 프레임)
    11.54s  agent 발화 시작: <ret> 네, 괜찮아요. 천천히 말씀해 주세요.
    11.55s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.26s]: (no information found)
    11.56s  user  발화 끝
    13.56s  <ret> 발화 (turn6 첫 프레임)
    13.80s  agent 발화 끝
    13.88s  agent 발화 시작: <ret> 물 불소화는 충치 예방에 도움이 된다고 알려져 있지만, 건강에 대한 우려도 있다고 해요. 혹시 더
    13.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.52s]: (tool result) Fluoridation has been linked to reduced tooth decay, but
    17.75s  user  발화 시작: 네.
    18.29s  user  발화 끝
    22.16s  <ret> 발화 (turn8 첫 프레임)
    22.40s  agent 발화 시작: <ret> 건강에 대한 우려는 개인차가 있을 수 있고, 다양한 연구 결과가 존재해요. 필요하시면 관련 자료를
    22.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (no information found)
    22.41s  agent 발화 끝
    26.68s  user  발화 시작: 음.
    27.17s  user  발화 끝
    29.44s  agent 발화 끝
    29.58s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    31.62s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    31.65s  user  발화 끝
    32.90s  agent 발화 끝
