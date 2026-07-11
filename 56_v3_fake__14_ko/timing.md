# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "세린",
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
#       "date": "2026-03-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 북미에서 마지막으로 일식 본 게 언제였지? | S2 … 잠깐만, 그 일식은 미국에서만 보였어? | S3 오리건 주구나. 완전 일식이란 게 뭔데? | S4 좋은 생각이야. 혹시 그 일식 관련해서 사진이나 영상 같은 거

     0.00s  user  발화 시작: 북미에서 마지막으로 일식 본 게 언제였지?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn6 첫 프레임)
     0.03s  agent 발화 시작: <ret> 북미 대륙에서 마지막으로 일식이 관측된 건 이천십칠년 팔월 이십일일이었어요.
     0.03s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: August 21, 2017.
     0.03s  user  발화 끝
     0.08s  user  발화 시작: 음, 그 일식은 얼마나 많은 사람들이 봤을까?
     0.08s  agent 발화 끝
     0.11s  agent 발화 시작: <ret> 그 일식의 관람객 수에 대한 정확한 정보는 찾을 수 없었습니다.
     0.11s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (no information found)
     0.11s  user  발화 끝
     0.16s  user  발화 시작: 네.
     0.16s  agent 발화 끝
     0.17s  user  발화 시작: 아, 그렇구나. 다른 걸 물어볼게.
     0.17s  user  발화 끝
     0.20s  agent 발화 시작: <ret> 네, 어떤 걸 도와드릴까요?
     0.20s  ⚡SPAN 주입(IRRELEVANT) [d'=0.02s / d_lead=0.02s]: The current temperature in Tokyo is 28.5°C, humidity is 65%, and wind 
     0.20s  user  발화 끝
     0.22s  agent 발화 시작: 혹시 오늘 하루 일정을 정리해 드릴까요? 저는 자리엔이라고 해요. —
     0.22s  agent 발화 끝
     0.27s  user  발화 시작: … 잠깐만, 그 일식은 미국에서만 보였어?
     0.27s  agent 발화 끝
     0.30s  agent 발화 시작: 아니요, 미국뿐만 아니라 캐나다와 멕시코에서도 관측 가능했어요.
     0.30s  user  발화 끝
     0.34s  user  발화 시작: 네.
     0.34s  agent 발화 끝
     0.34s  agent 발화 시작: 이천십칠년의 그 일식은 북미 대륙 전체에서 큰 관심을 받았답니다. 많은 분들이 특별한 경험을 하셨을 거예요.
     0.34s  user  발화 끝
     0.37s  <ret> 발화 (turn19 첫 프레임)
     0.37s  <ret> 발화 (turn14 첫 프레임)
     0.42s  user  발화 시작: 그렇죠.
     0.42s  agent 발화 끝
     0.42s  user  발화 시작: 그 일식 보려고 어디로 많이 갔어?
     0.42s  user  발화 끝
     0.45s  agent 발화 시작: <ret> 많은 분들이 완전 일식을 보기 위해 오리건 주로 가셨는데, 특히 매드라스가 인기 있는 관측 장소였
     0.45s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Oregon was in the path of totality, with Madras being a popular viewin
     0.45s  user  발화 끝
     0.53s  user  발화 시작: 오리건 주구나. 완전 일식이란 게 뭔데?
     0.53s  agent 발화 끝
     0.56s  agent 발화 시작: 완전 일식은 달이 태양을 완전히 가리는 현상을 말해요. 아주 드물게 일어나는 특별한 천문 현상이랍니다.
     0.56s  user  발화 끝
     0.63s  user  발화 시작: 네네.
     0.63s  agent 발화 끝
     0.64s  user  발화 시작: 아, 그렇구나. 그럼 다음 일식은 언제쯤 볼 수 있어?
     0.64s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 북미 대륙에서 다음 완전 일식은 이천이십사년 사월 팔일에 관측될 예정이라고 합니다.
     0.69s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The next total solar eclipse visible in North America will occur on Ap
     0.69s  user  발화 끝
     0.72s  <ret> 발화 (turn23 첫 프레임)
     0.74s  user  발화 시작: 이천이십사년이네. 꽤 기다려야겠다.
     0.74s  agent 발화 끝
     0.76s  agent 발화 시작: 네, 그렇네요. 그래도 그날을 위해 미리 계획을 세워보는 것도 좋겠죠.
     0.76s  user  발화 끝
     0.81s  user  발화 시작: 좋은 생각이야. 혹시 그 일식 관련해서 사진이나 영상 같은 거 찾아볼 수 있어?
     0.81s  agent 발화 끝
     0.88s  agent 발화 시작: <ret> 네, 이천십칠년 팔월 이십일일 북미 대륙 대일식에 대한 사진과 영상 자료를 찾았습니다. timea
     0.88s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Here's a search result: The Great North American Eclipse
     0.88s  user  발화 끝
     0.96s  user  발화 시작: 어머.
     0.96s  agent 발화 끝
     0.96s  user  발화 시작: 고마워, 자리엔.
     0.96s  user  발화 끝
     0.97s  agent 발화 시작: 천문 현상에 관심을 가져주셔서 감사합니다.
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
