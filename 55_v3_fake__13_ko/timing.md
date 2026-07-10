# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "수현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-20",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 범죄 심리 시즌이 언제 다시 시작되죠? | S2 … 혹시 그 드라마에 나왔던 실제 사건들 중에 가장 기억에 남 | S3 맞아요. 혹시 그 드라마의 촬영지는 주로 어디였나요? | S4 맞아요. 가끔씩 다시 봐야겠어요.

     0.00s  user  발화 시작: 범죄 심리 시즌이 언제 다시 시작되죠?
     2.82s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 범죄 심리 새로운 시즌은 이천십팔년 시월 삼일에 시작해요. 드라마 다시 보실 생각이에요?
     2.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: The new season of Criminal Minds begins on October 3, 2018.
     3.05s  user  발화 끝
     9.09s  agent 발화 끝
     9.53s  user  발화 시작: 네, 너무 기대돼요. 근데 그 드라마, 원래 몇 시즌까지 나왔었죠?
    14.45s  <ret> 발화 (turn3 첫 프레임)
    14.67s  user  발화 끝
    14.85s  agent 발화 시작: <ret> 총 열다섯 시즌이 나왔어요. 이천오년 구월 이십구일부터 이천이십년 십일월 십오일까지 방영됐죠. 정
    14.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Criminal Minds originally aired for fifteen seasons, from September 29
    20.06s  user  발화 시작: 진짜?
    20.69s  user  발화 끝
    24.82s  agent 발화 끝
    24.96s  user  발화 시작: 와, 진짜 오래됐네요. 좋아하는 캐릭터가 있었어요?
    28.63s  <ret> 발화 (turn6 첫 프레임)
    28.95s  agent 발화 시작: <ret> 저는 모든 캐릭터가 매력적이었지만, 스펜서 리드 박사가 특히 인상 깊었어요. 분석력과 따뜻함이 공
    28.95s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=8.11s]: The current temperature in Reykjavik, Iceland is 5°C with a wind chill
    29.12s  user  발화 끝
    37.06s  agent 발화 끝
    37.17s  agent 발화 시작: 요즘 날씨가 많이 쌀쌀해졌죠 —
    38.96s  user  발화 시작: … 혹시 그 드라마에 나왔던 실제 사건들 중에 가장 기억에 남는 사건이 있나요?
    39.66s  agent 발화 끝
    43.79s  <ret> 발화 (turn9 첫 프레임)
    44.11s  agent 발화 시작: <ret> 아, 네, 물론이죠. 가장 기억에 남는 사건은…
    44.11s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.16s]: The UnSub, also known as George Foyet, was a serial killer featured in
    44.23s  user  발화 끝
    48.27s  agent 발화 끝
    48.36s  agent 발화 시작: 시즌 삼에 등장했던 조지 포예라는 연쇄 살인범 사건이 특히 끔찍했어요. 그 사건은 정말 충격적이었죠.
    54.80s  agent 발화 끝
    54.91s  user  발화 시작: 정말 무시무시했죠. 배우들은 연기할 때 힘들었을 것 같아요.
    58.66s  agent 발화 시작: 네, 배우분들도 촬영하면서 정신적으로 많이 힘들어하셨다고 들었어요. 그런 역할을 소화하는 건 정말 대단한 일
    58.80s  user  발화 끝
    65.75s  agent 발화 끝
    66.00s  user  발화 시작: 맞아요. 혹시 그 드라마의 촬영지는 주로 어디였나요?
    70.04s  <ret> 발화 (turn14 첫 프레임)
    70.28s  agent 발화 시작: <ret> 주로 캘리포니아 로스앤젤레스에서 촬영했어요. 미국 여러 지역에서도 외부 촬영을 진행했다고 하네요.
    70.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: Criminal Minds was primarily filmed in Los Angeles, California, with s
    70.49s  user  발화 끝
    74.14s  user  발화 시작: 응.
    74.55s  user  발화 끝
    76.58s  agent 발화 끝
    76.69s  user  발화 시작: 로스앤젤레스군요. 미국 드라마는 촬영 규모가 큰 것 같아요.
    81.37s  agent 발화 시작: 네, 미국 드라마는 스케일이 큰 편이죠. 그래서 볼거리가 풍성하고 몰입도도 높은 것 같아요.
    81.41s  user  발화 끝
    84.24s  user  발화 시작: 그래.
    84.87s  user  발화 끝
    87.06s  agent 발화 끝
    87.16s  user  발화 시작: 맞아요. 가끔씩 다시 봐야겠어요.
    89.60s  agent 발화 시작: 네, 언제든지 다시 보셔도 좋을 거예요. 훌륭한 드라마죠.
    89.74s  user  발화 끝
    91.66s  user  발화 시작: 응.
    92.15s  user  발화 끝
    93.57s  agent 발화 끝
    93.76s  user  발화 시작: 고마워요, 가에라. 덕분에 궁금증이 풀렸어요.
    97.16s  agent 발화 시작: 천만에요. 언제든지 또 궁금한 점이 있으면 저를 찾아주세요. 즐거운 시간 보내세요.
    97.31s  user  발화 끝
   102.67s  agent 발화 끝
