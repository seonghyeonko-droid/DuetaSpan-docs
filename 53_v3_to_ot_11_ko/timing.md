# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Toaira · Location: Tokyo, Japan · Nationality: Japanese · Gender: non-binary · Age: 40s · TZ: Asia/Tokyo (JST, UTC+9) · Currency: JPY (¥)
#   B. 저장 메모리:
#      [2026-07-24] User is allergic to penicillin.
#      [2026-07-09] User is into home fermentation.
#      [2026-05-28] User is planning a trip to Iceland in December.
#      [2026-03-14] User is lactose-intolerant.
#      [2026-02-21] User works as a software engineer.
#   B. 과거 대화 요약:
#      [2026-06-14] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-03-23] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-01-12] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 혹시 그거 궁금했는데, A팀에게 최근에 노히터 게임 당한 적이 | S2 와, 엄청 오래된 것 같아요. 누가 던졌는데요? | S3 저기, 혹시 쓰레기 버리는 거 잊지 않으셨어요? | S4 죄송해요. 산타나… 이름이 되게 오랜만에 들리네요.

     0.00s  user  발화 시작: 혹시 그거 궁금했는데, A팀에게 최근에 노히터 게임 당한 적이 있나요?
     4.23s  <ret> 발화 (turn1 첫 프레임)
     4.44s  user  발화 끝
     4.47s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 받으시는 입장에서 정말 답답하셨겠네요. 이천십팔 년 4월 21일에 있었던 
     6.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    11.81s  user  발화 시작: 와, 엄청 오래된 것 같아요. 누가 던졌는데요?
    11.93s  agent 발화 끝
    14.86s  <ret> 발화 (turn3 첫 프레임)
    15.17s  agent 발화 시작: <ret> 잠깐만요, 그 경기 관련해서 자세한 내용을 확인해 드릴게요. 미네소타 트윈스의 어빈 산타나가 노히
    15.37s  user  발화 끝
    16.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: Ervin Santana of the Minnesota Twins pitched the no-hitter against the
    22.67s  user  발화 시작: 저기, 혹시 쓰레기 버리는 거 잊지 않으셨어요?
    22.86s  agent 발화 끝
    25.87s  user  발화 시작: 죄송해요. 산타나… 이름이 되게 오랜만에 들리네요.
    25.90s  user  발화 끝
    28.98s  agent 발화 시작: 시간이 지나면서 이름이 잊혀지는 건 당연해요. 특히 많은 선수가 오고 가니까요. [happy] 꾸준히 휴식을
    29.02s  user  발화 끝
    39.17s  agent 발화 끝
