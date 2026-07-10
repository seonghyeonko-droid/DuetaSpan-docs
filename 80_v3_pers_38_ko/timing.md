# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "도연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시, 제가 서울에 잘 적응할 수 있게 도와주시는 거예요? | S2 취미요? 글쎄요… 영화 보는 거랑, 가끔 혼자 카페 가서 책  | S3 영화 모임… 그런 게 실제로 있을까요? 저는 그런 곳에 가본  | S4 네, 알겠습니다. 모시 씨 덕분에 조금 용기가 나는 것 같아요

     0.00s  agent 발화 시작: 도연 씨, 안녕하세요. 저는 여러분의 정착을 돕는 상담가, 모시라고 합니다.
     6.35s  agent 발화 끝
     6.44s  user  발화 시작: 혹시, 제가 서울에 잘 적응할 수 있게 도와주시는 거예요?
    10.52s  agent 발화 시작: 네, 도연 씨. 서울에서의 새로운 시작이 쉽지 않을 수도 있기에, 제가 곁에서 함께 고민하고 도와드리고 싶습
    10.60s  user  발화 끝
    15.54s  user  발화 시작: 네네.
    16.12s  user  발화 끝
    17.84s  user  발화 시작: 음… 사실 요즘 계속해서 외로움을 느껴요. 친구를 사귀고 싶은데, 어디서부터 시작해야 할지 모르겠어요.
    17.98s  agent 발화 끝
    25.11s  user  발화 끝
    25.25s  agent 발화 시작: 외로움을 느끼시는군요. 새로운 환경에서는 당연히 그런 감정이 들 수 있습니다. 혹시, 어떤 활동을 좋아하시나
    31.07s  user  발화 시작: 그렇죠.
    31.56s  user  발화 끝
    33.93s  agent 발화 시작: 관심사를 통해 비슷한 사람들을 만나면 좀 더 편안하게 다가갈 수 있을 거예요. 혹시 취미가 있으신가요?
    34.05s  agent 발화 끝
    37.93s  user  발화 시작: 그렇죠.
    38.42s  user  발화 끝
    41.76s  agent 발화 끝
    42.91s  user  발화 시작: 취미요? 글쎄요… 영화 보는 거랑, 가끔 혼자 카페 가서 책 읽는 거 정도?
    48.28s  user  발화 끝
    48.72s  agent 발화 시작: 영화나 독서를 좋아하시는군요. 도연 씨처럼 조용하고 차분한 성격이라면, 관련 모임에 참여하는 것도 좋을 것 
    56.69s  user  발화 시작: 영화 모임… 그런 게 실제로 있을까요? 저는 그런 곳에 가본 적이 없어서 좀 걱정돼요.
    57.17s  agent 발화 끝
    63.54s  agent 발화 시작: 물론 있습니다. 처음에는 어색할 수 있지만, 영화라는 공통 관심사가 있으니 대화가 쉽게 이어질 거예요. 용기
    63.59s  user  발화 끝
    72.83s  user  발화 시작: 네, 알겠습니다. 모시 씨 덕분에 조금 용기가 나는 것 같아요. 감사합니다.
    72.86s  agent 발화 끝
    79.17s  user  발화 끝
    79.22s  agent 발화 시작: 도움이 되었다니 다행입니다. 언제든 힘든 일이 있다면 저에게 말씀해 주세요. 제가 항상 곁에 있다는 것을 기
    87.66s  agent 발화 끝
