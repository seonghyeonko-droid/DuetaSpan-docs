# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했어요. 항상 궁금했거든요.
     4.72s  <ret> 발화 (turn1 첫 프레임)
     5.04s  user  발화 끝
     5.12s  agent 발화 시작: <ret> 그건 정말 자주 물어보시는 질문이에요. 기타 연주는 에디 반 헤일런 씨가 담당했답니다.
     6.32s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.92s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.12s  agent 발화 끝
    10.13s  user  발화 시작: 와, 정말이에요? 다른 사람인 줄 알았어요. 정말 놀랍네요.
    13.43s  agent 발화 시작: 당시로서는 꽤 이례적인 협업이었는데, 하드 록을 팝 음악 팬들에게 선보였거든요.
    13.55s  user  발화 끝
    19.17s  agent 발화 끝
    20.68s  user  발화 시작: 저기, 혹시 재활용 쓰레기 버리셨어요?
    23.00s  user  발화 시작: 죄송해요. 노래 이야기로 다시 돌아가서… 그분께 돈을 많이 줬나요?
    23.22s  user  발화 끝
    26.94s  user  발화 끝
    27.07s  <ret> 발화 (turn6 첫 프레임)
    27.22s  agent 발화 시작: <ret> 보상을 파악하는 건 복잡할 수 있어요. 처음에는 에디 반 헤일런 씨가 로열티도 받지 못했고, 음반
    28.11s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.53s]: Eddie Van Halen did not receive royalties or credit on the original re
    38.35s  agent 발화 끝
