# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "라현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "dislike",
#       "text": "User can't stand anchovies."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "partner",
#       "text": "User's partner is named Yuna."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-01-23",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] 라현 씨, 안녕하세요. 저는 우나스라고 해요. 불안감을 다루는 데 도움을 드리는 상담 에이전트
     4.59s  user  발화 시작: 예.
     5.00s  user  발화 끝
     8.62s  user  발화 시작: 근데 불안감을 다룬다고요? 그게 정확히 무슨 뜻이에요?
     8.66s  agent 발화 끝
    12.11s  agent 발화 시작: 불안은 누구에게나 찾아올 수 있는 자연스러운 감정이에요. 하지만 그 감정이 너무 커지면 일상생활에 지장을 줄
    12.13s  user  발화 끝
    23.21s  user  발화 시작: 잠깐만요, 마음 챙김이요? 그거 좀 어렵지 않아요?
    23.79s  agent 발화 끝
    26.44s  user  발화 끝
    26.63s  agent 발화 시작: [curious] 아, 마음 챙김이 어렵다고 느끼시는군요. 처음에는 조금 어려울 수 있지만, 간단한 명상부터
    32.67s  user  발화 시작: 네.
    33.02s  user  발화 끝
    37.21s  agent 발화 끝
    37.28s  agent 발화 시작: 예를 들어, 숨을 쉬는 동안 느껴지는 감각에 집중해 보세요. 공기가 코를 통해 들어오고 나가는 것을 느껴보는
    52.71s  user  발화 시작: 시험 말고도 여러 가지로 걱정이 많아요. 미래에 대한 불안감도 크고요.
    52.82s  agent 발화 끝
    57.65s  user  발화 끝
