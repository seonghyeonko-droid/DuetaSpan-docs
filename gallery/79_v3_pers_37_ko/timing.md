# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "가담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 무슨 일을 하는 사람이에요? | S2 사실 요즘 회사 일이 너무 많아서 잠도 제대로 못 자고 있어요 | S3 네, 그렇죠. 어떻게 해야 할지 모르겠어요. | S4 음… 책 읽는 거요.

     0.00s  agent 발화 시작: 안녕하세요, 가담님. 저는 라엔이라고 해요. 힘든 일이 있으실 때 편안하게 이야기 나눌 수 있도록 돕는 상담
     5.71s  user  발화 시작: 그치.
     6.21s  user  발화 끝
     7.60s  agent 발화 끝
     8.33s  user  발화 시작: 혹시 무슨 일을 하는 사람이에요?
    10.26s  agent 발화 시작: 저는 가담님의 마음을 편안하게 하고, 스트레스를 줄이는 방법을 함께 찾아보는 역할을 합니다. 지금 어떤 점이
    10.40s  user  발화 끝
    13.14s  user  발화 시작: 음.
    13.59s  user  발화 끝
    18.65s  agent 발화 끝
    18.75s  agent 발화 시작: 혹시 최근에 특별히 걱정되는 일이나 마음을 짓누르는 무거운 감정이 있으신가요? 무엇이든 괜찮으니 편하게 말씀
    26.16s  agent 발화 끝
    26.21s  user  발화 시작: 사실 요즘 회사 일이 너무 많아서 잠도 제대로 못 자고 있어요.
    29.62s  agent 발화 시작: 일이 많아 잠까지 설치신다니, 정말 힘드시겠어요. 몸과 마음이 많이 지쳐 계실 텐데, 잠 못 이루는 밤이 계
    29.81s  user  발화 끝
    35.70s  user  발화 시작: 응.
    36.20s  user  발화 끝
    38.98s  agent 발화 끝
    40.03s  user  발화 시작: 네, 그렇죠. 어떻게 해야 할지 모르겠어요.
    43.17s  agent 발화 시작: 잠자리에 들기 전에 따뜻한 물로 샤워를 하거나, 잔잔한 음악을 듣는 것이 도움이 될 수 있어요. 아니면 가벼
    43.27s  user  발화 끝
    53.69s  user  발화 시작: 응.
    54.14s  user  발화 끝
    56.80s  agent 발화 끝
    56.83s  user  발화 시작: 음… 책 읽는 거요.
    58.60s  agent 발화 시작: 책 읽는 것을 좋아하시는군요. 책 속의 이야기에 몰입하는 동안 잠시나마 현실의 어려움을 잊을 수 있어서 좋죠
    58.63s  user  발화 끝
    68.61s  agent 발화 끝
