# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 게 언제였는지 아시나요? 궁금해서요.
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.33s  user  발화 끝
     5.40s  agent 발화 시작: <ret> 좋은 질문이세요. 오클랜드 애슬레틱스는 이천십팔 년 4월 21일에 마지막으로 노히트를 당했습니다.
     7.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.53s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    12.06s  user  발화 시작: 와, 정말 오래됐네요.
    12.17s  agent 발화 끝
    13.48s  agent 발화 시작: 네, 그 이후로 꽤 오랜 시간이 지났습니다.
    13.66s  user  발화 끝
    15.84s  agent 발화 끝
    17.25s  user  발화 시작: 잠시만요, 그 경기에 상대 팀 투수는 누구였죠?
    20.16s  <ret> 발화 (turn5 첫 프레임)
    20.32s  agent 발화 시작: <ret> 그 경기의 자세한 내용을 잠시 확인해 볼게요. 제임스 팩스턴 선수가 시애틀 매리너스 소속으로 그날
    20.44s  user  발화 끝
    21.44s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.85s]: James Paxton pitched a no-hitter against the Oakland Athletics on Apri
    29.04s  agent 발화 끝
    30.53s  user  발화 시작: 아, 나중에 우유 사 오라고 알려주세요.
    32.81s  user  발화 시작: 팩스턴 선수는 그날 정말 압도적이었나 보네요, 그렇죠?
    32.92s  user  발화 끝
    36.50s  user  발화 끝
