# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "노연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 후나르라고 해요. 부산으로 이사 오신 걸 축하드리고, 새로운 곳에 잘 정착하실 
    12.38s  agent 발화 끝
    13.31s  user  발화 시작: 그런데 그냥 상담해 주는 거예요? 진짜 사람이에요?
    16.32s  agent 발화 시작: 이름 마음에 들어 하셔서 기쁘네요. 저는 노연 씨의 마음을 편안하게 하고, 새로운 환경에 적응하는 과정을 지
    16.37s  user  발화 끝
    31.31s  agent 발화 끝
    31.36s  user  발화 시작: 음… 사실은, 혼자 사는 게 좀 무서워요. 부산은 처음 와 보는 곳이고, 아는 사람도 없고요.
    37.85s  agent 발화 시작: 혼자라는 생각에 불안감을 느끼시는군요. 새로운 곳에 오셨을 때 그런 감정은 자연스러운 거예요. 혹시 어떤 점
    38.03s  user  발화 끝
    49.03s  agent 발화 끝
    49.41s  user  발화 시작: 그냥 밤에… 집 안에서 소리가 나면 너무 놀라요. 괜히 겁이 나고… uhhh… 괜히 혼자 뭘 잘못한 건가 싶
    57.25s  user  발화 끝
