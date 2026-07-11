# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "진우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-10",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 진우님. 저는 에랜이라고 해요. 혹시 오늘 하루 어떻게 지내셨는지 여쭤봐도 될까요?
     0.11s  user  발화 시작: 그래.
     0.11s  agent 발화 끝
     0.12s  user  발화 시작: 뭘 도와주시는 분이세요?
     0.12s  user  발화 끝
     0.15s  agent 발화 시작: 저는 진우님의 일상과 생산성을 응원하는 웰니스 코치랍니다. 어떤 어려움이 있으신가요, 편하게 말씀해 주세요.
     0.15s  user  발화 끝
     0.27s  user  발화 시작: 음.
     0.27s  agent 발화 끝
     0.28s  agent 발화 시작: 요즘 뭔가 스트레스받는 일이 있으신가요? 아니면 하루하루를 좀 더 효율적으로 보내고 싶으신가요? 무엇이든 괜
     0.28s  user  발화 끝
     0.41s  user  발화 시작: 음… 사실 요즘 일이 너무 많아서 뭘 먼저 해야 할지 모르겠어요. 그냥 막막해요.
     0.41s  agent 발화 끝
     0.53s  agent 발화 시작: 일이 많아서 막막하다니, 충분히 그럴 수 있어요. 우선 가장 중요하다고 생각되는 일 세 가지를 적어보는 건 
     0.53s  user  발화 끝
     0.69s  user  발화 시작: 세 가지요? 음… 일단 프로젝트 마감일, 다음 주 발표 준비, 그리고… 아, 팀 회의 준비요.
     0.69s  agent 발화 끝
     0.82s  agent 발화 시작: 좋은 시작이에요, 진우님. 이제 그 세 가지를 중요도와 긴급성에 따라 분류해 보면 어떨까요? 우선순위를 정하
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
