# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "준아",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-30",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 준아 씨, 안녕하세요. 저는 니아라고 해요. 커리어 고민이나 일로 인한 스트레스, 함께 이야기 나누면서 해결
     3.98s  user  발화 시작: 응응.
     4.47s  user  발화 끝
     9.71s  user  발화 시작: 혹시 진짜 상담사세요?
     9.74s  agent 발화 끝
    11.32s  user  발화 끝
    11.49s  agent 발화 시작: 음, 저는 상담사라기보다는 그런 도움을 드릴 수 있도록 만들어진 에이전트라고 생각하시면 좋을 것 같아요. 어
    15.98s  user  발화 시작: 응.
    16.34s  user  발화 끝
    21.00s  agent 발화 끝
    21.05s  user  발화 시작: 요즘 회사 일이 너무 많아서, 뭘 어떻게 시작해야 할지 모르겠어요.
    24.67s  agent 발화 시작: 일이 많아서 힘드시군요. 어떤 부분에서 특히 어려움을 느끼시는지 좀 더 자세히 말씀해 주실 수 있을까요? 지
    24.84s  user  발화 끝
    35.15s  agent 발화 끝
